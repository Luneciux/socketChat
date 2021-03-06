const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const authConfig = require('../../config/auth');

const User = require('../models/User');

const router = express.Router();

function generateToken( params = {}){
  return jwt.sign(params, authConfig.secret, {
    expiresIn: 86400,
  });

}

router.post('/register', async (req, res) => {
  try {
    const { email } = req.body;

    if(await User.findOne({ email }))
      return res.status(400).send({ error: 'User already exists' })
    
    const user = await User.create(req.body);
    
    user.password = undefined;

    return res.send({ 
      user,
      token: generateToken({ id: user.id }) 
    });

  } catch (err) {
    
    return res.status(400).send({ error: 'Registration failed' });
  }
});

router.post('/authenticate', async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email }).select('+password');

  if(!user)
    return res.status(400).send({ error: 'User not found' });

  if(!await bcrypt.compare(password, user.password))
    return res.status(400).send({ error: 'Invalid password' });
  
  user.password = undefined;

  res.send({ 
    user,
    token: generateToken({ id: user.id }), 
  });

});

router.get('/user/:userId', async (req, res) => {
  try { 
    const user = await User.findById(req.params.userId);

    res.send({ user });
  } catch (err) {
    return res.status(400).send({ error: 'Error loading user' });
  }

});

module.exports = app => app.use('/auth', router);

