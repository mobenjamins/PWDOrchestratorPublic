import axios from 'axios';

export const sirenAPI = axios.create({
  baseURL: 'https://api.insee.fr/entreprises/sirene/V3',
  headers: {
    'Authorization': 'Bearer eb27f691-2e09-39d5-a03e-c7c2c6a803f3',
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
});
 