<template>
  <div class="home-container">
    <!-- Welcome Section -->
    <h1>Welcome to the Course Planner</h1>
    <p>Use the navigation bar to explore courses and manage your profile.</p>

    <!-- Personalized Welcome -->
    <div class="personalized-welcome">
      <h2>Hello, Vikram Reddy!</h2>
      <p>Ready to make the most of this academic year? Check out your schedule or explore new courses.</p>
    </div>

    <!-- Dashboard Overview -->
    <div class="dashboard-overview">
      <h2>Dashboard Overview</h2>
      <p>You are enrolled in <strong>4 courses</strong> this term.</p>
      <p>Next class: <strong>MA 1020</strong> at <strong>8:00 AM</strong> in <strong>Room 101</strong>.</p>
    </div>

    <!-- Announcements Section -->
    <div class="announcements">
      <h2>Announcements</h2>
      <ul>
        <li>Add/Drop deadline: <strong>September 15, 2024</strong></li>
        <li>Upcoming Event: <strong>Hackathon on October 10, 2024</strong></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      enrolledCourses: 4,
      nextClass: {
        course: "MA 1020",
        time: "8:00 AM",
        room: "Room 101",
      },
      announcements: [
        { text: "Add/Drop deadline: September 15, 2024" },
        { text: "Upcoming Event: Hackathon on October 10, 2024" },
      ],
      userName: "Vikram Reddy",
    };
  },
};
</script>

<style scoped>
.home-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  color: #ffffff;
  background-color: #800000;
  text-align: center;
}

/* Header Styles */
h1 {
  font-size: 2.5em;
  font-weight: bold;
  margin-bottom: 20px;
  color: #ffffff; /* Ensure the title is in white */
}

p {
  font-size: 1.2em;
  margin-bottom: 30px;
}

/* Personalized Welcome */
.personalized-welcome {
  background-color: #ffffff;
  color: #800000;
  border-radius: 10px;
  padding: 20px;
  width: 80%;
  margin-bottom: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.personalized-welcome h2 {
  font-size: 1.5em;
  font-weight: bold;
  margin-bottom: 10px;
  color: #800000; /* Red title */
}

/* Dashboard Overview */
.dashboard-overview {
  background-color: #ffffff;
  color: #800000;
  border-radius: 10px;
  padding: 20px;
  width: 80%;
  margin-bottom: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.dashboard-overview h2 {
  font-size: 1.5em;
  font-weight: bold;
  margin-bottom: 10px;
  color: #800000; /* Red title */
}

/* Announcements Section */
.announcements {
  background-color: #ffffff;
  color: #800000;
  border-radius: 10px;
  padding: 20px;
  width: 80%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.announcements h2 {
  font-size: 1.5em;
  font-weight: bold;
  margin-bottom: 10px;
  color: #800000; /* Red title */
}

.announcements ul {
  list-style-type: none;
  padding: 0;
}

.announcements li {
  font-size: 1.2em;
  margin: 10px 0;
}
</style>
