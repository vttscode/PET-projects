import axios from 'axios';

const tenorApi = {
  request: query => {
    return axios.get(`https://api.tenor.com/v1/search?q=${query.replace(/\s/g, '+')}&limit=18`);
  },
  requestTrending: () => axios.get('https://api.tenor.com/v1/trending?limit=18'),
};

export default tenorApi;
