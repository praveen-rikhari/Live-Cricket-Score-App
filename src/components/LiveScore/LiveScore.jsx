import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LiveScore = () => {
  const [liveScore, setLiveScore] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.cricapi.com/v1/match_scorecard?apikey=8c3d9e26-843d-4c68-aef1-109bce14d9cf&offset=0&id=0b12f428-98ab-4009-831d-493d325bc555');
        setLiveScore(response.data);
        console.log(response)
      } catch (error) {
        console.error('Error fetching live score:', error);
      }
    };

    fetchData();
  }, []);

  if (!liveScore) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{liveScore.data.name}</h2>
      <p>Status: {liveScore.data.status}</p>
      <p>Venue: {liveScore.data.venue}</p>
      <p>Date: {liveScore.data.date}</p>
      <h3>Teams</h3>
      <ul>
        {liveScore.data.teams.map((team, index) => (
          <li key={index}>{team}</li>
        ))}
      </ul>
      <h3>Score</h3>
      {liveScore.data.score.map((score, index) => (
        <div key={index}>
          <p>{score.inning}</p>
          <p>Runs: {score.r}, Wickets: {score.w}, Overs: {score.o}</p>
        </div>
      ))}
      <p>Toss Winner: {liveScore.data.tossWinner}</p>
      <p>Toss Choice: {liveScore.data.tossChoice}</p>
      <p>Match Winner: {liveScore.data.matchWinner}</p>
    </div>
  );
};

export default LiveScore;
