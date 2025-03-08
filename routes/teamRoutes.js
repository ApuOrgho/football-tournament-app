const express = require('express');
const Team = require('../models/Team');
const router = express.Router();

// Get all teams
router.get('/', async (req, res) => {
  const teams = await Team.find();
  res.json(teams);
});

// Add a new team
router.post('/', async (req, res) => {
  const team = new Team(req.body);
  await team.save();
  res.json(team);
});

// Update team points
router.put('/:id', async (req, res) => {
  const updatedTeam = await Team.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedTeam);
});

// Delete a team
router.delete('/:id', async (req, res) => {
  await Team.findByIdAndDelete(req.params.id);
  res.send('Team deleted');
});

module.exports = router;
