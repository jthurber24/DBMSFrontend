<template>
  <nav class="navbar">
    <img src="@/assets/WPI_logo.png" alt="WPI Logo" class="logo" />
    <router-link to="/home">Home</router-link>
    <router-link to="/courses">Courses</router-link>
    <router-link to="/profile">Profile</router-link>
    <router-link to="/calendar">Calendar</router-link>
    <button @click="logout" class="logout-button">Logout</button>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  methods: {
    logout() {
      // Clear any authentication data if needed (e.g., tokens)
      this.$router.push("/login");
    }
  }
};
</script>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 10px;
  background-color: #a50034; /* WPI red color */
}

.logo {
  height: 40px;
  margin-right: 20px;
}

router-link, .logout-button {
  color: white;
  text-decoration: none;
}

.logout-button {
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 1rem;
}

.logout-button:hover {
  color: #ccc;
}
router-link:hover {
  text-decoration: underline;
}
</style>
