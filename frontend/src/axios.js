import axios from 'axios'

axios.defaults.baseURL = 'http://172.16.20.84:8082/LoginForm';
axios.defaults.headers.common['Authorization'] = 'Bearer' + localStorage.getItem('token');
