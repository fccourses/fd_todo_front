import axios from 'axios';
import { BASE_URL } from '../config';

const http = axios.create({
  baseURL: `http://localhost:3000/api`,
});

export const getTasks = ({ userId = 1 } = {}) =>
  http.get(`/users/${userId}/tasks`);

export default http;
