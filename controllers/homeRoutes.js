const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');

// Default GET route
router.get('/', async (req, res) => {
  try {
    
    res.render('homepage', { 
        homepage: true,
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
      res.redirect('/dashboard');
      return;
    }
  
    res.render('login');
  });

  // GET route for dashboard page
router.get('/dashboard', (req, res) => {
    res.render('dashboard', {
      dashboard: true,
      logged_in: req.session.user_id
    });
});

// GET route for profile page
router.get('/profile', (req, res) => {
  res.render('profile', {
    profile: true,
    logged_in: req.session.user_id
  });
});

module.exports = router;