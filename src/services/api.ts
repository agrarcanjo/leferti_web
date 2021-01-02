import axios from 'axios';

const api = axios.create({
  //baseURL: 'http://backend-dev22.us-east-2.elasticbeanstalk.com/' 
  baseURL: 'http://192.168.100.109:8080/'
})

export default api