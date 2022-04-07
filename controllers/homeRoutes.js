const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');

// Default GET route
router.get('/', async (req, res) => {
  try {
    
    res.render('homepage', { 
        logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET route for login page
router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.redirect('/homepage');
      return;
    }
  
    res.render('homepage');
  });

module.exports = router;