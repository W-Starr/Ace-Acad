import axios from 'axios';

const API = axios.create({
  baseURL: 'https://ace-acad.com.ng/application',
  headers: {
    'Content-Type': 'application/json'
  }
});

export default API;
