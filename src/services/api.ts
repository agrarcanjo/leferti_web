import axios from 'axios';

const api = axios.create({
  //baseURL: 'http://backend-dev22.us-east-2.elasticbeanstalk.com/' 
  baseURL: 'http://192.168.100.143:8080'
  //baseURL: 'http://192.168.100.127:8080'
})

export default api
