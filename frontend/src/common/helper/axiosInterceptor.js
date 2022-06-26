import Axios from 'axios';

const axiosInstance = Axios.create({
  timeout: 10000,
});

//add token to all request, for authorization header
axiosInstance.interceptors.request.use(function(config) {
  const token = localStorage.getItem('token');
  config.headers.Authorization = 'Bearer ' + token;
  return config;
});

axiosInstance.interceptors.response.use(
  function(response) {
    // Send payload direct
    return response;
  },

  async function(error) {
    if (error.response && error.response.data) {
      //send error payload only
      return Promise.reject(error.response);
    } else {
      return Promise.reject({
        message: 'Some unusual error occured, please try again',
      });
    }
  },
);

export default axiosInstance;