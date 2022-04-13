const router = require('express').Router();
const { Favorite, Content } = require('../../models');
const withAuth = require('../../utils/auth');

// POST route to add a favorite
router.post('/', async (req, res) => {

    // const existngRec = await Content.create({

    // });
    const newContent = await Content.create({
        title: req.body.videoAlt,
        thumbnail: req.body.videoSrc,
        video_id: req.body.videoID
    });

    const getContent = newContent.get({ plain: true });
    const newFav = await Favorite.create({
        user_id: req.session.user_id,
        content_id: getContent.id,
    });

    res.status(200).json(newFav);
});

module.exports = router;