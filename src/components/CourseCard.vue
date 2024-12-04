<template>
  <div class="course-card">
    <h2>{{ course.courseName }}</h2>
    <p><strong>Level:</strong> {{ course.level }}</p>
    <p><strong>Duration:</strong> {{ course.duration }}</p>
    <router-link :to="{ name: 'CourseDetail', params: { id: course.courseNumber } }">View Details</router-link>
  </div>
</template>

<script>
export default {
  name: 'CourseCard',
  props: {
    course: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.course-card {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 20px;
  margin: 10px 0;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}
</style>
