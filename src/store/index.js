import Vuex from "vuex";
import auth from "./auth";

export default function createStore(Vue, { isClient }) {
  // Use Vuex plugin
  Vue.use(Vuex);

  // Create Vuex store
  const store = new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
      auth,
    },
  });

  return store;
}
