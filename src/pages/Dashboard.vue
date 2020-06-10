<template>
  <Layout>
    <div class="dashboard">
      <h1>This is a Dashboard page</h1>
    </div>
  </Layout>
</template>

<script>
import auth from "@/store/modules/auth";

export default {
  name: "Dashboard",

  beforeRouteEnter(to, from, next) {
    if (!auth.state.token && !auth.state.user) {
      // TODO: Remove setTimeout (issue with a blank homepage)
      setTimeout(() => {
        return next({
          name: "home",
        });
      }, 0);
    }

    next();
  },
};
</script>
