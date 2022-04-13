const router = require('express').Router();
const { User, Favorite, Content } = require('../models');
const withAuth = require('../utils/auth');
const fetch = require('node-fetch');
require('dotenv').config();

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
router.get('/dashboard', withAuth, async (req, res) => {
  res.render('dashboard', {
    dashboard: true,
    logged_in: req.session.user_id
  });
});

// GET route for profile page
router.get('/profile', withAuth, async (req, res) => {
  res.render('profile', {
    profile: true,
    logged_in: req.session.user_id
  });
});

// GET route for gallery
router.get('/gallery', withAuth, async (req, res) => {
  res.render('gallery', {
    // dashboard: true,
    logged_in: req.session.user_id
  });
});

// GET route to retrieve user favorites
router.get('/favorites', withAuth, async (req, res) => {
  try {

    const userInfo = await User.findByPk(req.session.user_id, {
      include: [{ model: Content, through: Favorite, as: 'Favorites' }],
      attributes: { exclude: ['email', 'password'] },
    });

    const data = userInfo.get({ plain: true});
    console.log(data);

    res.render('gallery', {
      data,
      dashboard: true,
      profile: true,
      favorite: true,
      logged_in: req.session.user_id,
    });

    // res.status(200).json(getUser);
  } catch (err) {
    res.status(400).json(err);
  }
});

// GET route to fetch videos from youtube API based on keyword search
router.get('/:catName', withAuth, async (req, res) => {
  try {
    let category = req.params.catName;
    if (category == "Music") {
      category = `soothing%20music%20ten%20mins`;
    } else if (category === "Yoga") {
      category = `yoga%20for%20beginners%20ten%20minutes`;
    } else {
      category = `short%20meditation%20for%20beginners`
    }

    let reqURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=";
    reqURL += category;
    reqURL += "&type=video&key=";
    reqURL += `${process.env.API_KEY}`;
    
    const response = await fetch(reqURL);
    const { items: data } = await response.json(); //Destructuring items(array) into 'data' alias
    
    res.render('gallery', {
      data,   // if at line 22 if you destructure items with no alias this would be data : items
      dashboard: true,
      profile: true,
      logged_in: req.session.user_id
    });

    // res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;