<template>
  <div class="login-container">
    <img :src="logo" alt="WPI Logo" class="logo" />
    <div class="login-box">
      <h1>Welcome to Course Planner</h1>
      <p>Please log in to continue</p>
      <input v-model="username" placeholder="Username" />
      <input type="password" v-model="password" placeholder="Password" />
      <button @click="login">Log In</button>
      <button @click="redirectToAdmin" class="admin-login-btn">Admin Login</button>
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    </div>
  </div>
</template>

<script>
import logo from '@/assets/WPI_logo.png';

export default {
  name: "UserLogin",
  data() {
    return {
      username: "",
      password: "",
      errorMessage: "",
      logo
    };
  },
  methods: {
    login() {
      if (this.username === "1234" && this.password === "1234") {
        this.$router.push("/home");
      } else {
        this.errorMessage = "Invalid username or password";
      }
    },
    redirectToAdmin() {
      this.$router.push("/admin-login");
    }
  }
};
</script>

<style scoped>
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #800000; /* Deep maroon background */
  color: #ffffff;
  text-align: center;
}

.logo {
  width: 100px;
  margin-bottom: 20px;
}

.login-box {
  width: 300px;
  padding: 40px;
  border-radius: 8px;
  background: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
}

.login-box h1 {
  margin-bottom: 20px;
  font-size: 24px;
  color: #333;
}

.login-box p {
  margin-bottom: 10px;
  color: #666;
}

input {
  width: 100%;
  padding: 10px;
  margin: 8px 0;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
}

button {
  width: 100%;
  padding: 10px;
  margin-top: 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

.admin-login-btn {
  margin-top: 10px;
  background-color: #00457C;
}

.error {
  color: red;
  margin-top: 10px;
}
</style>
