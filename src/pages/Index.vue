<template>
  <Layout>
    <h1>{{ getToken }}</h1>
    <h2>{{ getUser }}</h2>
  </Layout>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  metaInfo: {
    title: "Hello, world!",
  },
  computed: {
    ...mapGetters("auth", ["getToken", "getUser"]),
  },
};
</script>
