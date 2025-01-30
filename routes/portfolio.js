const express = require('express');
const router = express.Router();
const Portfolio = require('../models/Portfolio');

// Get all portfolios
router.get('/', async (req, res) => {
  try {
    const portfolios = await Portfolio.find();
    res.json(portfolios);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a portfolio
router.post('/', async (req, res) => {
  try {
    const portfolio = new Portfolio(req.body);
    const savedPortfolio = await portfolio.save();
    res.status(201).json(savedPortfolio);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update portfolio
router.put('/:id', async (req, res) => {
  try {
    const updatedPortfolio = await Portfolio.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedPortfolio);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete portfolio
router.delete('/:id', async (req, res) => {
  try {
    await Portfolio.findByIdAndDelete(req.params.id);
    res.json({ message: 'Portfolio deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
