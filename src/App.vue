<template>
  <div id="app">
    <NavBar v-if="showUserNavBar" />
    <AdminNavBar v-if="showAdminNavBar" />
    <router-view />
    <footer v-if="showFooter">
      <p>© 2024 Course Planner | All Rights Reserved</p>
    </footer>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import AdminNavBar from "@/components/AdminNavBar.vue";

export default {
  name: "App",
  components: { NavBar, AdminNavBar },
  computed: {
    showUserNavBar() {
      return !this.isLoginPage && !this.isAdminPage;
    },
    showAdminNavBar() {
      return !this.isLoginPage && this.isAdminPage;
    },
    isLoginPage() {
      const loginRoutes = ["/login", "/admin-login"];
      return loginRoutes.includes(this.$route.path);
    },
    isAdminPage() {
      const adminRoutes = ["/admin-dashboard", "/edit-courses", "/current-courses"];
      return adminRoutes.includes(this.$route.path);
    },
    showFooter() {
      return !this.isLoginPage;
    },
  },
};
</script>

<style scoped>
footer {
  text-align: center;
  padding: 10px;
  background-color: #333;
  color: white;
}
</style>
