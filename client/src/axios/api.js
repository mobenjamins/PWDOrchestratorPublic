import axios from 'axios';

export const sirenAPI = axios.create({
   baseURL: 'https://api.insee.fr/entreprises/sirene/V3',
   headers: {
      Authorization: 'Bearer 938c22af-caa1-3b20-b852-8b271a593105',
      Accept: 'application/json',
      'Content-Type': 'application/json'
   }
});
