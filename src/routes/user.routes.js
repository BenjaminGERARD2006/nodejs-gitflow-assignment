const express = require('express');
const router = express.Router();
const userModel = require('../models/user.model');

router.post('/', async (req, res) => {
  const user = await userModel.createUser(req.body.name, req.body.email);
  res.json(user);
});

router.get('/', async (req, res) => {
  const users = await userModel.getUsers();
  res.json(users);
});

router.get('/:id', async (req, res) => {
  const user = await userModel.getUserById(req.params.id);
  res.json(user);
});

router.put('/:id', async (req, res) => {
  const user = await userModel.updateUser(
    req.params.id,
    req.body.name,
    req.body.email
  );
  res.json(user);
});

router.delete('/:id', async (req, res) => {
  await userModel.deleteUser(req.params.id);
  res.json({ message: 'User deleted' });
});

module.exports = router;