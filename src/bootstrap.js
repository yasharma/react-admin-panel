import axios from 'axios';
import lodash from 'lodash';
import moment from 'moment';
//import {Cookie} from './lib/Cookie';

/* Global variables */
window.axios = axios;
window._ = lodash;
window.moment = moment;
window.axios.defaults.headers.common = { 'X-Requested-With': 'XMLHttpRequest' };
window.axios.defaults.baseURL =
  process.env.NODE_ENV !== 'production'
    ? 'http://100.100.7.38:7000/api/'
    : 'http://158.85.67.166:8028/api/';

// Global images url
window.IMAGE_PATH =
  process.env.NODE_ENV !== 'production'
    ? 'http://100.100.7.38:9000'
    : 'http://158.85.67.166:8028';

// Add a request interceptor
axios.interceptors.request.use(
  config => {
    // Do something before request is sent
    const token = '';
    if (token) {
      config.headers = {
        Authorization: `Bearer ${token}`
      };
    }
    return config;
  },
  error => Promise.reject(error)
);

function networkError() {
  const alert = document.getElementById('alert');
  console.log(alert);
  alert.className = 'alert alert-primary';

  setTimeout(() => {
    alert.className = 'alert alert-primary';
  }, 5000);
}

// Add a response interceptor
axios.interceptors.response.use(
  response => {
    // Do something with response data
    return response;
  },
  error => {
    if (!error.response) {
      console.log('nko resghj');
      networkError();
      // console.log(alert);
      // alert('Network Failure! Make sure you have an active internet connection.');
    }

    // Do something with response error
    return Promise.reject(error);
  }
);
