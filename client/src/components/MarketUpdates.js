import React from 'react';

const MarketUpdates = () => {
  const updates = [
    { date: '2025-01-01', trade: 'Bought 100 shares of XYZ' },
    { date: '2025-01-02', trade: 'Sold 50 shares of ABC' },
  ];

  return (
    <div className="market-updates">
      <h2>Market Updates</h2>
      <ul>
        {updates.map((update, index) => (
          <li key={index}>
            <p>{update.date}: {update.trade}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MarketUpdates;
