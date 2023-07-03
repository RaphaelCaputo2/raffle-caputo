import React, { useState, useEffect } from 'react';
import { raffleService } from '../services/raffleService';

const RemainingNumbersView: React.FC = () => {
  const [remainingNumbers, setRemainingNumbers] = useState<number[]>([]);

  useEffect(() => {
    fetchRemainingNumbers();
  }, []);

  const fetchRemainingNumbers = async () => {
    try {
      const numbers = await raffleService.getRemainingNumbers();
      setRemainingNumbers(numbers);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div id="remainingNumbersView">
      <h2>Remaining Numbers</h2>
      {remainingNumbers.length > 0 ? (
        <ul>
          {remainingNumbers.map((number, index) => (
            <li key={index}>{number}</li>
          ))}
        </ul>
      ) : (
        <p>No remaining numbers.</p>
      )}
    </div>
  );
};

export default RemainingNumbersView;