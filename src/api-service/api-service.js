const BASE_URL = 'http://localhost:4040/alcohol';

async function apiService() {
  const response = await fetch(BASE_URL);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not Found'));
}

export { apiService };
