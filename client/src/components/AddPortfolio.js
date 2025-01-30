import React, { useState } from 'react';
import axios from 'axios';

function AddPortfolio({ onPortfolioAdded }) {
  const [name, setName] = useState('');
  const [totalValue, setTotalValue] = useState('');
  const [dailyPL, setDailyPL] = useState('');
  const [winRate, setWinRate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!name || !totalValue || !dailyPL || !winRate) {
      alert("All fields are required!");
      return;
    }

    const newPortfolio = { name, totalValue, dailyPL, winRate };
    
    try {
      const response = await axios.post('/api/portfolio', newPortfolio);
      onPortfolioAdded(response.data);
      setName('');
      setTotalValue('');
      setDailyPL('');
      setWinRate('');
    } catch (error) {
      console.error('Error adding portfolio!', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Portfolio</h2>
      <input type="text" placeholder="Portfolio Name" value={name} onChange={(e) => setName(e.target.value)} required />
      <input type="number" placeholder="Total Value" value={totalValue} onChange={(e) => setTotalValue(e.target.value)} required />
      <input type="number" placeholder="Daily P&L" value={dailyPL} onChange={(e) => setDailyPL(e.target.value)} required />
      <input type="number" placeholder="Win Rate (%)" value={winRate} onChange={(e) => setWinRate(e.target.value)} required />
      <button type="submit">Add Portfolio</button>
    </form>
  );
}

export default AddPortfolio;
