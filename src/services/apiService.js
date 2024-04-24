import axios from 'axios';

const API_KEY = import.meta.env.API_KEY;

export const fetchLiveScore = async () => {
  try {
    const response = await axios.get(`https://api.cricapi.com/v1/match_scorecard?apikey=${API_KEY}&offset=0&id=0b12f428-98ab-4009-831d-493d325bc555`);
    return response.data;
  } catch (error) {
    console.error('Error fetching live score:', error);
    return null;
  }
};