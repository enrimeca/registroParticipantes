const BASE_URL = 'https://platzi-badges.herokuapp.com';

async function callApi(endpoint, options = {}) {
  
  options.headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };

  const url = BASE_URL + endpoint;
  
  const response = await fetch(url, options);
  const data = await response.json();
  return data.payload;
}

const api = {
  participants: {
    list() {
      return callApi('/api/v1');
    },
    create(participant) {
      return callApi(`/api/v1`, {
        method: 'POST',
        body: JSON.stringify(participant),
      });
    },
    read(participantId) {
      return callApi(`/api/v1/${participantId}`);
    },
    update(participantId, updates) {
      return callApi(`/api/v1/${participantId}`, {
        method: 'PUT',
        body: JSON.stringify(updates),
      });
    },
    remove(participantId) {
      return callApi(`/api/v1/${participantId}`, {
        method: 'DELETE',
      });
    },
  },
};

export default api
