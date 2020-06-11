// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";

// Importing Vuex and es6-promises - https://vuex.vuejs.org/installation.html#promise
import "es6-promise/auto";
import createStore from "./store";

export default function(Vue, { router, head, isClient, appOptions }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);

  // Add Vuex store
  const store = createStore(Vue, { isClient });
  appOptions.store = store;

  if (isClient) {
    store.dispatch("auth/attempt", localStorage.getItem("token"));
  }
}
