<template>
  <div class="course-list-container">
    <div class="search-bar">
      <input type="text" placeholder="Search courses..." v-model="searchQuery" />
      <select v-model="searchType">
        <option value="name">By Name</option>
        <option value="department">By Department</option>
      </select>
      <button @click="search">Search</button>
    </div>

    <div v-if="filteredCourses.length" class="courses-grid">
      <div v-for="course in filteredCourses" :key="course.courseNumber" class="course-card">
        <h3>{{ course.courseName }}</h3>
        <p><strong>Department:</strong> {{ course.departmentName }} ({{ course.departmentAbbreviation }})</p>
        <p><strong>Course Number:</strong> {{ course.courseNumber }}</p>
        <p><strong>Credits:</strong> {{ course.minCredits }} - {{ course.maxCredits }}</p>
        <p><strong>Grade Type:</strong> {{ course.gradeType }}</p>
        <p><strong>Section:</strong> {{ course.sectionNumber }}</p>
        <p><strong>Available Seats:</strong> {{ course.availableSeats }}</p>
        <p><strong>Max Waitlist:</strong> {{ course.maxWaitlist }}</p>
        <p><strong>Actual Waitlist:</strong> {{ course.actualWaitlist }}</p>
        <p><strong>Term:</strong> {{ course.term }}</p>
        <p><strong>Part of Term:</strong> {{ course.partOfTerm }}</p>
        <p><strong>Professor:</strong> {{ course.professorName }} ({{ course.professorEmail }})</p>
        <p><strong>Days:</strong> {{ course.days }}</p>
        <p><strong>Time:</strong> {{ course.startTime }} - {{ course.endTime }}</p>
        <p><strong>Location:</strong> {{ course.building }}, Room {{ course.room }}</p>
        <p><strong>Student Enrolled:</strong> {{ course.studentFirstname }} {{ course.studentLastname }} - {{ course.studentEmail }} ({{ course.major }})</p>
        <p><strong>Enrollment Status:</strong> {{ course.status }}</p>
        <!-- Corrected router-link for details -->
        <router-link :to="{ name: 'CourseDetail', params: { id: course.courseNumber }, query: { course: course } }">View Details</router-link>
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
      courses: [
        {
          departmentAbbreviation: 'AB',
          departmentName: 'Arabic',
          courseNumber: '210X',
          courseName: 'INTERMEDIATE ARABIC I',
          courseDescription: "This course will build on advanced beginning Arabic conversational patterns. Focus on dialogue and mastery of grammatical constructions.",
          minCredits: 1,
          maxCredits: 1,
          gradeType: 'normal',
          sectionNumber: 'D01',
          availableSeats: 23,
          maxWaitlist: 0,
          actualWaitlist: 5,
          term: '201702',
          partOfTerm: 'D Term',
          professorName: 'Brahimi',
          professorEmail: 'look@it.up',
          days: 'mon,tue,thu,fri',
          startTime: '8:00AM',
          endTime: '8:50AM',
          building: 'SL',
          room: '011',
          studentFirstname: 'Vikram',
          studentLastname: 'Reddy',
          major: 'Biology',
          studentEmail: 'vikram.reddy0@university.edu',
          status: 'Enrolled',
        },
        {
          departmentAbbreviation: 'CS',
          departmentName: 'Computer Science',
          courseNumber: '110',
          courseName: 'INTRODUCTION TO PROGRAMMING',
          courseDescription: "Fundamentals of programming, focusing on Python language basics.",
          minCredits: 4,
          maxCredits: 4,
          gradeType: 'normal',
          sectionNumber: 'A02',
          availableSeats: 15,
          maxWaitlist: 10,
          actualWaitlist: 3,
          term: '202301',
          partOfTerm: 'A Term',
          professorName: 'Dr. Lee',
          professorEmail: 'lee@cs.edu',
          days: 'mon,wed,fri',
          startTime: '10:00AM',
          endTime: '11:20AM',
          building: 'SH',
          room: '102',
          studentFirstname: 'Alice',
          studentLastname: 'Johnson',
          major: 'Data Science',
          studentEmail: 'alice.johnson@university.edu',
          status: 'Enrolled',
        },
        {
          departmentAbbreviation: 'MA',
          departmentName: 'Mathematics',
          courseNumber: '201',
          courseName: 'CALCULUS I',
          courseDescription: "Introduction to calculus, covering limits, derivatives, and basic integrals.",
          minCredits: 4,
          maxCredits: 4,
          gradeType: 'normal',
          sectionNumber: 'C01',
          availableSeats: 10,
          maxWaitlist: 5,
          actualWaitlist: 1,
          term: '202301',
          partOfTerm: 'C Term',
          professorName: 'Dr. Brown',
          professorEmail: 'brown@math.edu',
          days: 'tue,thu',
          startTime: '1:00PM',
          endTime: '2:20PM',
          building: 'OH',
          room: '203',
          studentFirstname: 'Bob',
          studentLastname: 'Smith',
          major: 'Mechanical Engineering',
          studentEmail: 'bob.smith@university.edu',
          status: 'Enrolled',
        },
        {
          departmentAbbreviation: 'PH',
          departmentName: 'Physics',
          courseNumber: '101',
          courseName: 'INTRODUCTION TO PHYSICS',
          courseDescription: "Basic principles of physics including motion, forces, energy, and thermodynamics.",
          minCredits: 3,
          maxCredits: 3,
          gradeType: 'normal',
          sectionNumber: 'B03',
          availableSeats: 12,
          maxWaitlist: 8,
          actualWaitlist: 2,
          term: '202302',
          partOfTerm: 'B Term',
          professorName: 'Dr. Martinez',
          professorEmail: 'martinez@phys.edu',
          days: 'mon,wed,fri',
          startTime: '9:00AM',
          endTime: '10:20AM',
          building: 'FL',
          room: '305',
          studentFirstname: 'Charlie',
          studentLastname: 'Davis',
          major: 'Electrical Engineering',
          studentEmail: 'charlie.davis@university.edu',
          status: 'Enrolled',
        },
        {
          departmentAbbreviation: 'BI',
          departmentName: 'Biology',
          courseNumber: '101',
          courseName: 'INTRODUCTION TO BIOLOGY',
          courseDescription: "An overview of biological concepts, covering cell biology, genetics, and evolution.",
          minCredits: 3,
          maxCredits: 3,
          gradeType: 'normal',
          sectionNumber: 'A01',
          availableSeats: 15,
          maxWaitlist: 10,
          actualWaitlist: 4,
          term: '202303',
          partOfTerm: 'A Term',
          professorName: 'Dr. Smith',
          professorEmail: 'smith@bio.edu',
          days: 'tue,thu',
          startTime: '11:00AM',
          endTime: '12:30PM',
          building: 'SL',
          room: '205',
          studentFirstname: 'David',
          studentLastname: 'Miller',
          major: 'Chemistry',
          studentEmail: 'david.miller@university.edu',
          status: 'Enrolled',
        },
        {
          departmentAbbreviation: 'CH',
          departmentName: 'Chemistry',
          courseNumber: '210',
          courseName: 'ORGANIC CHEMISTRY I',
          courseDescription: "Introduction to organic molecules and reactions. Structure, properties, and reactivity of organic compounds.",
          minCredits: 4,
          maxCredits: 4,
          gradeType: 'normal',
          sectionNumber: 'B02',
          availableSeats: 8,
          maxWaitlist: 5,
          actualWaitlist: 1,
          term: '202302',
          partOfTerm: 'B Term',
          professorName: 'Dr. Taylor',
          professorEmail: 'taylor@chem.edu',
          days: 'mon,wed,fri',
          startTime: '3:00PM',
          endTime: '4:20PM',
          building: 'OH',
          room: '120',
          studentFirstname: 'Emma',
          studentLastname: 'Thompson',
          major: 'Biology',
          studentEmail: 'emma.thompson@university.edu',
          status: 'Enrolled',
        },
        {
          departmentAbbreviation: 'EN',
          departmentName: 'English',
          courseNumber: '101',
          courseName: 'INTRODUCTION TO LITERATURE',
          courseDescription: "Study of literary forms, including fiction, poetry, and drama.",
          minCredits: 3,
          maxCredits: 3,
          gradeType: 'normal',
          sectionNumber: 'A03',
          availableSeats: 20,
          maxWaitlist: 10,
          actualWaitlist: 0,
          term: '202301',
          partOfTerm: 'A Term',
          professorName: 'Dr. Williams',
          professorEmail: 'williams@eng.edu',
          days: 'tue,thu',
          startTime: '4:00PM',
          endTime: '5:20PM',
          building: 'WB',
          room: '210',
          studentFirstname: 'Olivia',
          studentLastname: 'Brown',
          major: 'English Literature',
          studentEmail: 'olivia.brown@university.edu',
          status: 'Enrolled',
        },
        {
          departmentAbbreviation: 'EE',
          departmentName: 'Electrical Engineering',
          courseNumber: '202',
          courseName: 'CIRCUITS AND SYSTEMS',
          courseDescription: "Analysis of electric circuits and systems. Covers resistive circuits, transient analysis, and AC circuits.",
          minCredits: 4,
          maxCredits: 4,
          gradeType: 'normal',
          sectionNumber: 'C02',
          availableSeats: 5,
          maxWaitlist: 10,
          actualWaitlist: 2,
          term: '202303',
          partOfTerm: 'C Term',
          professorName: 'Dr. White',
          professorEmail: 'white@ee.edu',
          days: 'mon,wed,fri',
          startTime: '2:00PM',
          endTime: '3:20PM',
          building: 'SH',
          room: '112',
          studentFirstname: 'Sophia',
          studentLastname: 'Green',
          major: 'Computer Engineering',
          studentEmail: 'sophia.green@university.edu',
          status: 'Enrolled',
        },
      ]

    };
  },
  computed: {
     filteredCourses() {
       const query = this.searchQuery.toLowerCase();

       return this.courses.filter(course => {
         if (this.searchType === 'name') {
           return course.courseName.toLowerCase().includes(query);
         } else if (this.searchType === 'department') {
           return course.departmentName.toLowerCase().includes(query);
         }
         return true;
       });
     },
   },
  methods: {
    search() {
      // Triggering reactivity, if needed.
    },
  },
};
</script>

<style scoped>
.course-list-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.search-bar {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  width: 80%;
  max-width: 800px;
  justify-content: center;
}

.courses-grid {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.course-card {
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  margin: 15px 0;
  width: 80%;
  max-width: 800px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

h3 {
  color: #333;
}

router-link {
  color: #d32f2f;
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;
}
<router-link :to="{ name: 'CourseDetail', params: { id: course.id }, query: { course: course } }">
  View Details
</router-link>

</style>
