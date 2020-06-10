<template>
  <header class="header">
    <strong>
      <g-link to="/">{{ siteName }}</g-link>
    </strong>

    <TheNav />
  </header>
</template>

<script>
import TheNav from "@/components/TheNav.vue";
export default {
  props: {
    siteName: {
      type: String,
      required: true,
    },
  },
  components: {
    TheNav,
  },
};
</script>

<style>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}
</style>
