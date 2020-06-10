<template>
  <form class="form" @submit.prevent="submit">
    <div class="form__item formItem">
      <label for="username" class="formItem__label">Username</label>
      <input
        class="formItem__input"
        v-model="form.username"
        name="username"
        id="username"
        type="text"
        placeholder="username"
      />
    </div>

    <div class="form__item formItem">
      <label for="email" class="formItem__label">Email</label>
      <input
        class="formItem__input"
        v-model="form.password"
        name="email"
        id="email"
        type="password"
        placeholder="email"
      />
    </div>

    <div class="form__item">
      <button class="form__btn" :disabled="isPending">Login</button>
    </div>
  </form>
</template>

<script>
export default {
  name: "FormLogIn",
  data() {
    return {
      isPending: false,
      form: {
        username: "paul",
        password: "",
      },
    };
  },
  methods: {
    submit() {
      this.isPending = true;
      console.log("form submit!");

      // TODO: Send the form data to fetch the token (vuex)
    },
  },
};
</script>

<style></style>
