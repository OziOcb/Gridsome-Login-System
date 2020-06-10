<template>
  <nav class="nav">
    <ul class="nav__list">
      <li><g-link class="nav__link" to="/">Home</g-link></li>

      <template v-if="getIsAuthenticated">
        <li class="nav__link">User Name</li>
        <li><g-link class="nav__link" to="/dashboard/">Dashboard</g-link></li>
        <li><a class="nav__link" href="#">Logout</a></li>
      </template>

      <template v-else>
        <li><g-link class="nav__link" to="/login/">Login</g-link></li>
      </template>
    </ul>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "TheNav",
  computed: {
    ...mapGetters("auth", ["getIsAuthenticated"]),
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
