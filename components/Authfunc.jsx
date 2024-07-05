import axios from 'axios';
import storeData from './storeData';


export default async function auth (endpoint, params) {
    try {
      const response = await axios.post(`http://62.109.17.249:1337/${endpoint}`, new URLSearchParams(params), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });
  
      storeData("access_token", response.data.access_token);
      storeData("refresh_token", response.data.refresh_token);
  
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };