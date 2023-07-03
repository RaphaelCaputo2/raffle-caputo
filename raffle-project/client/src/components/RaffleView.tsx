import React, { useEffect, useState } from 'react';
import { Raffle } from '../services/raffleService';

interface RaffleViewProps {
  raffleService: Raffle;
}

const RaffleView: React.FC<RaffleViewProps> = ({ raffleService }) => {
  const [raffles, setRaffles] = useState([]);

  useEffect(() => {
    fetchRaffles();
  }, []);

  const fetchRaffles = async () => {
    const raffles = await raffleService.getRaffles();
    setRaffles(raffles);
  };

  return (
    <div id="raffleView">
      <h1>Raffles</h1>
      {raffles.map((raffle: any) => (
        <div key={raffle.id}>
          <h2>{raffle.name}</h2>
          <img src={raffle.photoUrl} alt={raffle.name} />
          <p>Remaining tickets: {raffle.remainingTickets}</p>
        </div>
      ))}
    </div>
  );
};

export default RaffleView;