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
import { mapActions } from "vuex";

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
    ...mapActions("auth", ["logIn"]),
    async submit() {
      this.isPending = true;

      try {
        await this.logIn(this.form);

        this.form.password = "";
        this.isPending = false;
      } catch (error) {
        this.form.password = "";
        this.isPending = false;
      }
    },
  },
};
</script>

<style></style>
