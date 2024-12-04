<template>
  <div>
    <div class="search-bar">
      <input type="text" placeholder="Search courses..." v-model="searchQuery" />
      <select v-model="searchType">
        <option value="name">By Name</option>
        <option value="category">By Category</option>
      </select>
      <select v-model="levelFilter">
        <option value="">All Levels</option>
        <option value="beginner">Beginner</option>
        <option value="intermediate">Intermediate</option>
        <option value="advanced">Advanced</option>
      </select>
      <select v-model="durationFilter">
        <option value="">All Durations</option>
        <option value="short">Short</option>
        <option value="medium">Medium</option>
        <option value="long">Long</option>
      </select>
      <button @click="search">Search</button>
    </div>
    <div v-if="filteredCourses.length">
      <div v-for="course in filteredCourses" :key="course.id" class="course-card">
        <h3>{{ course.name }}</h3>
        <p>{{ course.description }}</p>
        <p><strong>Level:</strong> {{ course.level }}</p>
        <p><strong>Duration:</strong> {{ course.duration }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '',
      searchType: 'name',
      levelFilter: '',     // For filtering by course level
      durationFilter: '',  // For filtering by course duration
      courses: [
        // Sample course data for testing
        { id: 1, name: "Introduction to Data Science", category: "Data Science", level: "beginner", duration: "short", description: "Learn the basics of data science." },
        { id: 2, name: "Machine Learning", category: "Data Science", level: "intermediate", duration: "medium", description: "Intermediate course on machine learning." },
        { id: 3, name: "Advanced Algorithms", category: "Computer Science", level: "advanced", duration: "long", description: "Learn advanced algorithms." },
      ]
    };
  },
  computed: {
    filteredCourses() {
      return this.courses.filter(course => {
        const matchesQuery =
          this.searchType === 'name'
            ? course.name.toLowerCase().includes(this.searchQuery.toLowerCase())
            : course.category.toLowerCase().includes(this.searchQuery.toLowerCase());

        const matchesLevel =
          !this.levelFilter || course.level === this.levelFilter;

        const matchesDuration =
          !this.durationFilter || course.duration === this.durationFilter;

        return matchesQuery && matchesLevel && matchesDuration;
      });
    }
  },
  methods: {
    search() {
      // Placeholder for search functionality, as we're already filtering with computed property
      console.log("Searching courses...");
    }
  }
};
</script>

<style scoped>
.search-bar {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
}

.course-card {
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 20px;
  margin: 10px 0;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}
</style>
