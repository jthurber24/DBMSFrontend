import axios from 'axios';

const apiClient = axios.create({
  baseURL: '/api',
  withCredentials: true,
});

export default {
  getCourses(query) {
    return apiClient.get(`/courses`, { params: { query } });
  },
  getCourseById(id) {
    return apiClient.get(`/courses/${id}`);
  },
  enrollInCourse(courseId, userId) {
    return apiClient.post(`/courses/${courseId}/enroll`, { userId });
  },
  getUserProfile() {
    return apiClient.get('/user/profile');
  },
};



