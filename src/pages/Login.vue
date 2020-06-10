<template>
  <Layout>
    <div class="login">
      <h1>This is a Login page</h1>

      <FormLogIn />
    </div>
  </Layout>
</template>

<script>
import FormLogIn from "@/components/FormLogIn.vue";

export default {
  name: "Login",
  components: {
    FormLogIn,
  },
};
</script>
