import axios from 'axios';

const BASE_URL = 'http://localhost:4040/alcohol';

async function apiService() {
  const response = await axios.get(BASE_URL);
  const alco = response.data;
  return alco;
}

export default apiService;
