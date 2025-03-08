const express = require('express');
const Tournament = require('../models/Tournament');
const router = express.Router();

// Get all tournaments
router.get('/', async (req, res) => {
  const tournaments = await Tournament.find();
  res.json(tournaments);
});

// Add a new tournament
router.post('/', async (req, res) => {
  const tournament = new Tournament(req.body);
  await tournament.save();
  res.json(tournament);
});

// Update tournament details
router.put('/:id', async (req, res) => {
  const updatedTournament = await Tournament.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedTournament);
});

// Delete a tournament
router.delete('/:id', async (req, res) => {
  await Tournament.findByIdAndDelete(req.params.id);
  res.send('Tournament deleted');
});

module.exports = router;
