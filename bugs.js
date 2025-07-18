const express = require('express');
const router = express.Router();
const Bug = require('../models/Bug');

router.post('/', async (req, res) => {
  try {
    const bug = new Bug(req.body);
    await bug.save();
    res.status(201).json(bug);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get('/', async (req, res) => {
  const bugs = await Bug.find();
  res.json(bugs);
});

router.put('/:id', async (req, res) => {
  const bug = await Bug.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(bug);
});

router.delete('/:id', async (req, res) => {
  await Bug.findByIdAndDelete(req.params.id);
  res.json({ message: 'Bug deleted' });
});

module.exports = router;