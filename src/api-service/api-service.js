import axios from 'axios';

const BASE_URL = 'http://localhost:4040/alcohol';

async function apiService() {
  const response = await axios.get(BASE_URL);
  return response
    ? await response.data
    : Promise.reject(new Error('Not Found'));
}

export { apiService };
