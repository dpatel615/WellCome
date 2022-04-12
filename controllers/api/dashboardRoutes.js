const router = require('express').Router();
const { Content, Favorite } = require('../../models');
const withAuth = require('../../utils/auth');
const { route } = require('./userRoutes');
// const nodeFetch = require('node-fetch');
// import fetch from 'node-fetch';
const fetch = require('node-fetch');
require('dotenv').config();

// GET route to retrieve videos based on user category selection
// router.get('/:catName', async (req, res) => {
//     try {
//         let category = req.params.catName;
//         if(category == "Music") {
//             category = `soothing%20music%20ten%20mins`; 
//         }else if(category === "Yoga") {
//             category = `yoga%20for%20beginners%20ten%20minutes`;
//         } else {
//             category = `short%20meditation%20for%20beginners`
//         }
//         console.log(category);
//         let reqURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=";
//         reqURL += category;
//         reqURL += "&type=video&key=";
//         reqURL += `${process.env.API_KEY}`;
//         // console.log(reqURL);
//         const response = await fetch(reqURL);
//         const { items: data } = await response.json(); //Destructuring items(array) into 'data' alias
//         // console.log(response);
//         res.render('gallery', {
//             data,   // if at line 22 if you destructure items with no alias this would be data : items
//             dashboard: true,
//             logged_in: req.session.user_id
//         });

//         // res.status(200).json(data);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

router.post('/', withAuth, async (req, res) => {
    const newContent = await Content.create({
        ...req.body,
    });

    const getContent = newContent.get({ plain: true });

    const newFav = await Favorite.create({
        user_id: req.session.user_id,
        content_id: getContent.id,
    });

    // console.log(newContent);
    res.status(200).json(newFav);
});

// router.get('/gallery', withAuth, async (req, res) => {
//     res.render('gallery', {
//       dashboard: true,
//       logged_in: req.session.user_id
//     });
//   });

module.exports = router;

