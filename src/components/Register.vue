<template>
  <div class="register">
    <h2>Register</h2>
    <form @submit.prevent="register">
      <input v-model="firstName" placeholder="First Name" required />
      <input v-model="lastName" placeholder="Last Name" required />
      <input v-model="email" placeholder="Email" type="email" required />
      <input v-model="username" placeholder="Username" required />
      <input v-model="password" type="password" placeholder="Password" required />
      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      username: '',
      password: ''
    };
  },
  methods: {
    register() {
      const userData = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        username: this.username,
        password: this.password
      };
      // Replace this with a request to your backend
      console.log("Registered with:", userData);
      alert("Registration successful!");
    }
  }
};
</script>

<style scoped>
.register {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>
