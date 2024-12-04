<template>
  <div class="schedule-viewer">
    <h2>Your Weekly Schedule</h2>
    <table>
      <thead>
        <tr>
          <th>Time</th>
          <th v-for="day in days" :key="day">{{ day }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="slot in timeSlots" :key="slot">
          <td>{{ slot }}</td>
          <td v-for="day in days" :key="day">{{ getCourseAt(day, slot) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    schedule: Array,
  },
  data() {
    return {
      days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
      timeSlots: ['8:00 AM', '10:00 AM', '12:00 PM', '2:00 PM', '4:00 PM'],
    };
  },
  methods: {
    getCourseAt(day, time) {
      const course = this.schedule.find(s => s.day === day && s.time === time);
      return course ? course.courseName : '';
    },
  },
};
</script>
