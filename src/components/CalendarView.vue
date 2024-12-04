<template>
  <div class="schedule-viewer">
    <!-- Header Section -->
    <div class="header">
      <h1 class="academic-year">2024 - 2025 Academic Year</h1>
      <div class="term-selector">
        <label for="term" class="term-label">Term:</label>
        <select id="term" v-model="selectedTerm" @change="updateTerm">
          <option value="A">A Term</option>
          <option value="B">B Term</option>
          <option value="C">C Term</option>
          <option value="D">D Term</option>
        </select>
      </div>
    </div>

    <!-- Content Section -->
    <div class="content">
      <!-- Course Selection Sidebar -->
      <div
        class="sidebar"
        :style="{ height: Math.max(filteredCourses.length * 60, 360) + 'px' }"
      >
        <h2>Course List</h2>
        <div class="course-item" v-for="course in filteredCourses" :key="course.id">
          <input type="checkbox" :id="course.id" v-model="course.visible" />
          <label :for="course.id">{{ course.name }}</label>
        </div>
      </div>

      <!-- Schedule Grid -->
      <div class="schedule-grid">
        <div class="time-column">
          <div v-for="time in times" :key="time" class="time-slot">{{ time }}</div>
        </div>
        <div class="day-column" v-for="day in days" :key="day">
          <div v-for="time in times" :key="time" class="time-slot">
            <template v-for="course in visibleCourses">
              <div
                v-if="course.schedule[day] && course.schedule[day].includes(time)"
                :key="course.id"
                :class="['course-block', course.color]"
              >
                <span>{{ course.name }}</span><br />
                <span>{{ course.room }}</span>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedTerm: "A",
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      times: ["8AM", "9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM", "6PM", "7PM"],
      terms: {
        A: [
          {
            id: "MA1020",
            name: "MA 1020",
            room: "Room 101",
            visible: true,
            color: "color-1",
            schedule: {
              Monday: ["8AM", "9AM"],
              Tuesday: ["8AM"],
              Thursday: ["8AM"],
              Friday: ["8AM"],
            },
          },
          {
            id: "MA1021",
            name: "MA 1021",
            room: "Room 102",
            visible: true,
            color: "color-2",
            schedule: {
              Monday: ["2PM"],
              Wednesday: ["2PM"],
              Friday: ["2PM"],
            },
          },
        ],
        B: [
          {
            id: "PH2020",
            name: "PH 2020",
            room: "Room 201",
            visible: true,
            color: "color-1",
            schedule: {
              Tuesday: ["10AM"],
              Wednesday: ["9AM"],
              Thursday: ["11AM"],
            },
          },
        ],
        C: [
          {
            id: "MA2050",
            name: "MA 2050",
            room: "Room 301",
            visible: true,
            color: "color-2",
            schedule: {
              Tuesday: ["9AM"],
              Wednesday: ["11AM"],
              Friday: ["2PM"],
            },
          },
        ],
        D: [
          {
            id: "EE3100",
            name: "EE 3100",
            room: "Room 401",
            visible: true,
            color: "color-3",
            schedule: {
              Monday: ["8AM", "9AM"],
              Wednesday: ["10AM"],
              Thursday: ["1PM"],
            },
          },
        ],
      },
    };
  },
  computed: {
    filteredCourses() {
      return this.terms[this.selectedTerm];
    },
    visibleCourses() {
      return this.filteredCourses.filter((course) => course.visible);
    },
  },
  methods: {
    updateTerm() {
      // Reset visibility for new term's courses
      this.filteredCourses.forEach((course) => {
        course.visible = true;
      });
    },
  },
};
</script>

<style scoped>
.schedule-viewer {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Arial, sans-serif;
  background-color: #800000;
  color: white;
  padding: 20px;
}

/* Header Section */
.header {
  width: 100%;
  text-align: center;
  margin-bottom: 20px;
}

.academic-year {
  font-size: 2.5rem;
  font-weight: bold;
  color: white;
  margin: 0;
}

.term-selector {
  margin-top: 10px;
}

.term-label {
  font-weight: bold;
  margin-right: 10px;
}

.term-dropdown {
  padding: 5px;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  background-color: white;
  color: #800000;
}

/* Content Section */
.content {
  display: flex;
  width: 90%;
  gap: 20px;
}

.sidebar {
  width: 25%;
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 8px;
  color: #333;
  overflow: hidden;
  transition: height 0.3s ease;
  min-height: 360px; /* Minimum height for consistent buffer */
}

.sidebar h2 {
  font-size: 1.5rem;
  color: #800000;
}

.course-item {
  margin: 10px 0;
}

.course-item label {
  margin-left: 5px;
}

.schedule-grid {
  width: 75%;
  display: grid;
  grid-template-columns: auto repeat(5, 1fr);
  gap: 1px;
  background-color: #333;
}

.time-column,
.day-column {
  display: flex;
  flex-direction: column;
}

.time-slot {
  height: 50px;
  border: 1px solid #ddd;
  text-align: center;
  line-height: 50px;
  color: black;
  background-color: white;
}

.course-block {
  background-color: #ffd966;
  padding: 5px;
  text-align: center;
  font-size: 0.9rem;
  color: white;
  border-radius: 4px;
}

.color-1 {
  background-color: #d32f2f;
}

.color-2 {
  background-color: #fbc02d;
}

.color-3 {
  background-color: #1976d2;
}
</style>
