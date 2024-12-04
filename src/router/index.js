import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/components/HomePage.vue';
import CourseSearch from '@/components/CourseSearch.vue';
import CourseList from '@/components/CourseList.vue';
import CourseDetail from '@/components/CourseDetail.vue';
import StudentProfile from '@/components/StudentProfile.vue';
import ScheduleViewer from '@/components/ScheduleViewer.vue';
import UserLogin from '@/components/UserLogin.vue';
import CalendarView from '@/components/CalendarView.vue';
import AdminLogin from '@/components/AdminLogin.vue';
import AdminDashboard from '@/components/AdminDashboard.vue';
import EditCourses from '@/components/EditCourses.vue'; // Import EditCourses component
import CurrentCourses from '@/components/CurrentCourses.vue'; // Import CurrentCourses component

const routes = [
  // Redirect root to login page
  { path: "/", redirect: "/login" },

  // User-related routes
  { path: "/login", component: UserLogin },
  { path: "/home", component: HomePage },
  { path: "/courses", component: CourseList },
  {
    path: "/courses/:id",
    name: "CourseDetail",
    component: CourseDetail,
    props: true
  },
  { path: "/profile", component: StudentProfile },
  { path: "/schedule", component: ScheduleViewer },
  { path: "/calendar", component: CalendarView },
  { path: "/search", component: CourseSearch },

  // Admin-related routes
  { path: "/admin-login", component: AdminLogin },
  { path: "/edit-courses", component: EditCourses },
  { path: "/current-courses", component: CurrentCourses },
  {
    path: "/admin-dashboard",
    component: AdminDashboard,
    meta: { requiresAdmin: true } // Meta property for admin routes
  },
];

// Create the router instance
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Optional: Route guard for admin routes
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAdmin) {
    const isAdmin = true; // Replace with actual admin authentication logic
    if (!isAdmin) {
      return next("/admin-login"); // Redirect to admin login if not authenticated
    }
  }
  next();
});

export default router;
