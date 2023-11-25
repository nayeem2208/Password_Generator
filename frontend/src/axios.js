import axios from "axios";


const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
      'Content-Type': 'application/json',
    },
    withCredentials: true, // If needed for cross-origin requests
  });
  

  export default axiosInstance;