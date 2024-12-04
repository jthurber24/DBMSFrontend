<template>
  <div class="student-profile">
    <h1>Student Profile</h1>
    <p><strong>Name:</strong> {{ student.firstName }} {{ student.lastName }}</p>
    <p><strong>Major:</strong> {{ student.major }}</p>
    <p><strong>Email:</strong> {{ student.email }}</p>

    <h2>Enrolled Courses</h2>
    <ul>
      <li v-for="course in student.enrolledCourses" :key="course.enrollmentId">
        {{ course.courseName }} - {{ course.status }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'StudentProfile',
  data() {
    return {
      student: {
        firstName: 'Vikram',
        lastName: 'Reddy',
        major: 'Biology',
        email: 'vikram.reddy0@university.edu',
        enrolledCourses: [
          { enrollmentId: 5000, courseName: 'INTERMEDIATE ARABIC I', status: 'Enrolled' },
          // Add more enrolled courses here
        ],
      },
    };
  },
};
</script>

<style scoped>
.student-profile {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}
h1, h2, p, li {
  color: white;
 }
</style>

