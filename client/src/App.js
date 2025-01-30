import React, { useState, useEffect } from 'react';
import './App.css';
import './styles.css';
import PortfolioList from './components/PortfolioList';
import AddPortfolio from './components/AddPortfolio';
import MarketUpdates from './components/MarketUpdates';
import ChartComponent from './components/ChartComponent';
import StrategyPerformance from './components/StrategyPerformance';
import axios from 'axios';

function App() {
  const [strategies, setStrategies] = useState([]);

  const fetchPortfolios = () => {
    axios.get('/api/portfolio')
      .then(response => {
        setStrategies(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the strategies!', error);
      });
  };

  useEffect(() => {
    fetchPortfolios();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Portfolio Analytics Dashboard</h1>
      </header>
      {strategies.map(strategy => (
        <div key={strategy.name}>
          <StrategyPerformance strategy={strategy} />
          <ChartComponent data={{ dates: strategy.dates, values: strategy.values }} />
        </div>
      ))}
      <PortfolioList />
      <AddPortfolio onPortfolioAdded={fetchPortfolios} />
      <MarketUpdates />
    </div>
  );
}

export default App;
