import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PortfolioList() {
  const [portfolios, setPortfolios] = useState([]);

  useEffect(() => {
    fetchPortfolios();
  }, []);

  const fetchPortfolios = async () => {
    try {
      const response = await axios.get('/api/portfolio');
      setPortfolios(response.data);
    } catch (error) {
      console.error('Error fetching portfolios!', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/portfolio/${id}`);
      setPortfolios(portfolios.filter((portfolio) => portfolio._id !== id));
    } catch (error) {
      console.error('Error deleting portfolio!', error);
    }
  };

  return (
    <div className="portfolio-list">
      <h2>Portfolio List</h2>
      <ul>
        {portfolios.map((portfolio) => (
          <li key={portfolio._id}>
            <h3>{portfolio.name}</h3>
            <p>Total Value: {portfolio.totalValue}</p>
            <p>Daily P&L: {portfolio.dailyPL}</p>
            <p>Win Rate: {portfolio.winRate}%</p>
            <button onClick={() => handleDelete(portfolio._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PortfolioList;
