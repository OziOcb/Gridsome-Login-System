<template>
  <Layout>
    <div class="signIn">
      <h1>This is a SignIn page</h1>

      <FormLogIn />
    </div>
  </Layout>
</template>

<script>
import FormLogIn from "@/components/FormLogIn.vue";

export default {
  name: "SignIn",
  components: {
    FormLogIn,
  },
};
</script>
