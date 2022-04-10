const router = require('express').Router();
const { Content, Favorite } = require('../../models');
const withAuth = require('../../utils/auth');
const { route } = require('./userRoutes');
// const nodeFetch = require('node-fetch');
// import fetch from 'node-fetch';
const fetch = require('node-fetch');
require('dotenv').config();

// GET route to retrieve videos based on user category selection
router.get('/:catName', async (req, res) => {
    try {
        console.log("inside get route");
        const category = req.params.catName;
        console.log(category);
        let reqURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=";
        reqURL += category;
        reqURL += "&type=video&key=";
        reqURL += `${process.env.API_KEY}`;
        console.log(reqURL);
        const response = await fetch(reqURL);
        const { items: data } = await response.json(); //Destructuring items(array) into 'data' alias
        // console.log(data);
        // res.send(data);
        res.render('dashboard', {
            data,   // if at line 22 if you destructure items with no alias this would be data : items
            dashboard: true,
            logged_in: req.session.user_id
        });

        // res.status(200).json(data);

        // https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=YOURKEYWORD&type=video&key=YOURAPIKEY
        // const allVideos = await Content.findAll({
        //     where: {
        //         category: req.params.catName
        //     },
        //     attributes: ['video_id']
        // });

        // const videoArr = allVideos.map((video) => video.get({ plain: true }));
        // // console.log(videoArr);
        // // res.status(200).json(videoArr);
        // let reqURL = "https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=";
        // videoArr.forEach((video) => {
        //     reqURL += video.video_id + ",";
        // });
        // reqURL = reqURL.substring(0, reqURL.length - 1);
        // reqURL += `&key=${process.env.API_KEY}`;
        // console.log(reqURL);
        // const response = await fetch(reqURL);
        // const data = await response.json();

        // console.log(data);
        // res.status(200).json(videoArr);
        // const response = await fetch(reqURL);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {
    const newContent = await Content.create({
        ...req.body,
    });

    const getContent = newContent.get({ plain:true }); 

    const newFav = await Favorite.create({
        user_id: req.session.user_id,
        content_id: getContent.id,
    });

    // console.log(newContent);
    res.status(200).json(newFav);
});

module.exports = router;

// GET data from database
// Use node-fetch for youtube api
// Store API key in .env file and use PROCESS.ENV.APIKEY
// Send data regarding video id to the FE