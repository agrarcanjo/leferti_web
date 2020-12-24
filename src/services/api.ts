import axios from 'axios';

const api = axios.create({
  baseURL: 'http://backend-dev22.us-east-2.elasticbeanstalk.com/' 
  //baseURL: 'http://localhost:8080/'
})

export default api