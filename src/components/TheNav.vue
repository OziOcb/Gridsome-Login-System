<template>
  <nav class="nav">
    <ul class="nav__list">
      <li><g-link class="nav__link" to="/">Home</g-link></li>

      <template v-if="authenticated">
        <li class="nav__link">User Name</li>
        <li><g-link class="nav__link" to="/dashboard/">Dashboard</g-link></li>
        <li><a class="nav__link" href="#">SignOut</a></li>
      </template>

      <template v-else>
        <li><g-link class="nav__link" to="/sign-in/">SignIn</g-link></li>
      </template>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "TheNav",
  data() {
    return {
      // TODO: Swap it with the authenticated getter from Vuex when it's ready
      authenticated: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.nav {
  &__list {
    display: flex;
    list-style: none;
    justify-content: center;
  }

  &__link {
    margin-right: 20px;
  }
}
</style>
