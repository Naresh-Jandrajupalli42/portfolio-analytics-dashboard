import React from 'react';

const StrategyComparison = ({ strategies }) => {
  return (
    <div className="strategy-comparison">
      <h2>Compare Strategies</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Total Value</th>
            <th>Win Rate</th>
            <th>ROI</th>
          </tr>
        </thead>
        <tbody>
          {strategies.map((strategy) => (
            <tr key={strategy.name}>
              <td>{strategy.name}</td>
              <td>{strategy.totalValue}</td>
              <td>{strategy.winRate}%</td>
              <td>{((strategy.totalValue - strategy.initialValue) / strategy.initialValue * 100).toFixed(2)}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StrategyComparison;
