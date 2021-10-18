import axios from 'axios';

const BASE_URL = 'http://localhost:4040/alcohol';

async function apiService() {
  const response = await axios.get(BASE_URL);
  return response
    ? await response.data
    : Promise.reject(new Error('Not Found'));
}

async function apiServisePost(bottle) {
  await axios({
    method: 'post',
    baseURL: BASE_URL,
    data: bottle,
  });
}
export { apiService, apiServisePost };
