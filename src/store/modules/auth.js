import axios from "axios";
// initial state
const state = {
  token: "vuex-token",
  user: "vuex-user",
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

    return dispatch("attempt", response.data.token);
  },

  async attempt(_, token) {
    console.log("token vuex\n ->", token);
  },
};

// mutations
const mutations = {};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
