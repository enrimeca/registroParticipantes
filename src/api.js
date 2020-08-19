// import React from 'react'

// import useFetch from './hooks/useFetch'
const BASE_URL = 'https://platzi-badges.herokuapp.com';

async function callApi(endpoint, options = {}) {
  // await simulateNetworkLatency();

  // options.headers = {
  //   'Content-Type': 'application/json',
  //   Accept: 'application/json',
  // };

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
    read(badgeId) {
      return callApi(`/api/v1/${badgeId}`);
    },
    update(badgeId, updates) {
      return callApi(`/api/v1/${badgeId}`, {
        method: 'PUT',
        body: JSON.stringify(updates),
      });
    },
    remove(badgeId) {
      return callApi(`/api/v1/${badgeId}`, {
        method: 'DELETE',
      });
    },
  },
};

export default api
