import axios from "axios";
// initial state
const state = {
  token: "",
  user: "",
};

// getters
const getters = {
  getToken(state) {
    return state.token;
  },
  getUser(state) {
    return state.user;
  },
};

// actions
const actions = {
  async logIn({ dispatch }, credentials) {
    const response = await axios.post(
      "https://dev.thinkingthrough.com/admin/bfd-api/jwt-auth/v1/token",
      credentials
    );

    // TODO: Save the token into the LocalStorage

    return dispatch("attempt", response.data.token);
  },

  async attempt({ commit }, token) {
    if (token) commit("SET_TOKEN", token);

    try {
      const response = await axios({
        method: "post",
        url: "https://dev.thinkingthrough.com/admin/bfd-api/wp/v2/users/me",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      commit("SET_USER", response.data);
    } catch (error) {
      console.log(error);
      commit("SET_TOKEN", "");
      commit("SET_USER", "");
    }
  },

  logOut({ commit }) {
    commit("SET_TOKEN", "");
    commit("SET_USER", "");
  },
};

// mutations
const mutations = {
  SET_TOKEN(state, token) {
    state.token = token;
  },
  SET_USER(state, data) {
    state.user = {
      name: data.name,
      email: data.email,
    };
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
