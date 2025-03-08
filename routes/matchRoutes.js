const express = require('express');
const Match = require('../models/Match');
const router = express.Router();

// Get all matches
router.get('/', async (req, res) => {
  const matches = await Match.find();
  res.json(matches);
});

// Add a new match
router.post('/', async (req, res) => {
  const match = new Match(req.body);
  await match.save();
  res.json(match);
});

// Update match score
router.put('/:id', async (req, res) => {
  const updatedMatch = await Match.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedMatch);
});

// Delete a match
router.delete('/:id', async (req, res) => {
  await Match.findByIdAndDelete(req.params.id);
  res.send('Match deleted');
});

module.exports = router;
