export default {
  namespaced: true,
  state: {
    token: "vuex-token",
    user: "vuex-user",
  },
  getters: {
    getToken(state) {
      return state.token;
    },
  },
  mutations: {},
  actions: {},
};
