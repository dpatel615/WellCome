const router = require('express').Router();
const { Favorite, Content } = require('../../models');
const withAuth = require('../../utils/auth');

// GET route to retrieve user favorites
router.get('/', withAuth, async (req, res) => {
    try {
        console.log("in default route");
        const allFavs = await Favorite.findAll({
            where: {
                user_id: req.session.user_id
            },
        });
        console.log(allFavs);

        const favArr = allFavs.map((fav) => fav.get({ plain: true}));
        console.log(favArr);

        res.render('favorite', {
            favArr,
            logged_in: req.session.user_id,
        });

        res.status(200).json(favArr);
    }catch(err){
        res.status(400).json(err);
    }
});

// POST route to add a favorite
router.post('/', async (req, res) => {
    // console.log("in post");
    // console.log(req.body)
    const newContent = await Content.create({
        // ...req.body,
        title: req.body.videoAlt,
        thumbnail: req.body.videoSrc,
        video_id: req.body.videoID
    });

    const getContent = newContent.get({ plain: true });
    // console.log(getContent);
    const newFav = await Favorite.create({
        user_id: req.session.user_id,
        content_id: getContent.id,
    });

    // console.log(newFav);
    res.status(200).json(newFav);
});

module.exports = router;