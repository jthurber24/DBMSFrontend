<template>
  <div class="course-detail">
    <h1>{{ course.courseName }}</h1>
    <p><strong>Department:</strong> {{ course.departmentName }} ({{ course.departmentAbbreviation }})</p>
    <p><strong>Description:</strong> {{ course.description }}</p>

    <!-- Enroll Section -->
    <div v-if="showEnrollOptions" class="enroll-options">
      <h2>Select Term and Time</h2>
      <div class="form-group">
        <label for="term">Select Term:</label>
        <select id="term" v-model="selectedTerm">
          <option v-for="term in course.terms" :key="term" :value="term">{{ term }}</option>
        </select>
      </div>
      <div class="form-group">
        <label for="time">Select Time:</label>
        <select id="time" v-model="selectedTime">
          <option v-for="time in course.times" :key="time" :value="time">{{ time }}</option>
        </select>
      </div>
      <button class="confirm-button" @click="confirmEnrollment">Confirm Enrollment</button>
      <button class="cancel-button" @click="cancelEnrollment">Cancel</button>
    </div>

    <!-- Buttons -->
    <div v-else class="button-group">
      <button class="enroll-button" @click="showEnrollOptions = true">
        {{ isEnrolled ? "Change Enrollment" : "Enroll" }}
      </button>
      <router-link class="back-button" to="/courses">Back to Courses</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "CourseDetail",
  data() {
    return {
      course: {
        departmentAbbreviation: "AB",
        departmentName: "Arabic",
        courseNumber: "210X",
        courseName: "INTERMEDIATE ARABIC I",
        description:
          "This course will build on advanced beginning Arabic conversational patterns...",
        terms: ["A Term", "B Term", "C Term", "D Term"], // Available terms
        times: ["8:00 AM - 9:00 AM", "10:00 AM - 11:00 AM", "2:00 PM - 3:00 PM"], // Available times
      },
      isEnrolled: false,
      showEnrollOptions: false,
      selectedTerm: "",
      selectedTime: "",
    };
  },
  methods: {
    confirmEnrollment() {
      if (this.selectedTerm && this.selectedTime) {
        this.isEnrolled = true;
        this.showEnrollOptions = false;
        alert(
          `Successfully enrolled in ${this.course.courseName} during ${this.selectedTerm} at ${this.selectedTime}.`
        );
      } else {
        alert("Please select a term and time to complete enrollment.");
      }
    },
    cancelEnrollment() {
      this.showEnrollOptions = false;
    },
  },
};
</script>

<style scoped>
.course-detail {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
  background-color: #800000; /* Deep maroon background */
  color: #ffffff; /* White text */
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

h1 {
  font-size: 2.5rem;
  font-weight: bold;
  color: #ffffff; /* Ensure title is white */
  margin-bottom: 20px;
}

p {
  font-size: 1.2rem;
  margin: 10px 0;
  line-height: 1.5;
}

.button-group {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
}

.enroll-button {
  padding: 10px 20px;
  font-size: 1rem;
  font-weight: bold;
  color: #ffffff;
  background-color: #007bff; /* Blue background for the enroll button */
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.enroll-button:hover {
  background-color: #0056b3; /* Darker blue on hover */
}

.back-button {
  padding: 10px 20px;
  font-size: 1rem;
  font-weight: bold;
  color: #800000;
  background-color: #ffffff; /* White background for the back button */
  border: 2px solid #800000; /* Maroon border */
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s, color 0.3s;
}

.back-button:hover {
  background-color: #800000; /* Maroon background on hover */
  color: #ffffff; /* White text on hover */
}

/* Enroll Options Styling */
.enroll-options {
  margin-top: 20px;
  text-align: left;
}

.enroll-options h2 {
  font-size: 1.5rem;
  color: #ffffff;
}

.form-group {
  margin-bottom: 15px;
}

label {
  font-size: 1.2rem;
  color: #ffffff;
  margin-bottom: 5px;
  display: block;
}

select {
  padding: 10px;
  font-size: 1rem;
  width: 100%;
  border-radius: 5px;
  border: none;
}

.confirm-button,
.cancel-button {
  padding: 10px 20px;
  font-size: 1rem;
  font-weight: bold;
  color: #ffffff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 10px;
  transition: background-color 0.3s;
}

.confirm-button:hover {
  background-color: #0056b3;
}

.cancel-button {
  background-color: #d9534f;
}

.cancel-button:hover {
  background-color: #c9302c;
}
</style>
