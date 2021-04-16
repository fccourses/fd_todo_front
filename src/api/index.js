import axios from 'axios';
import { BASE_URL } from '../config';

const http = axios.create({
  baseURL: `http://localhost:3000/api`,
});

export const getTasks = ({ userId = 1 } = {}) =>
  http.get(`/users/${userId}/tasks`);

export const createTask = (taskData, userId = 1) =>
  http.post(`/users/${userId}/tasks`, taskData);

export const deleteTask = ({ id, userId = 1 } = {}) =>
  http.delete(`/users/${userId}/tasks/${id}`);

export default http;
