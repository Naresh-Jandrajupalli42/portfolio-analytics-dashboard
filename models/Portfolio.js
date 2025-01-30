const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PortfolioSchema = new Schema({
  name: String,
  totalValue: Number,
  dailyPL: Number,
  winRate: Number,
  initialValue: Number,
  dates: [String],
  values: [Number],
});

module.exports = mongoose.model('Portfolio', PortfolioSchema);
