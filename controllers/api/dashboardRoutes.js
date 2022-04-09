const router = require('express').Router();
const { Content } = require('../../models');
const withAuth = require('../../utils/auth');
const { route } = require('./userRoutes');

// GET route to retrieve videos based on user category selection
router.get('/:catName', async (req, res) => {
    try {
        const allVideos = await Content.findAll({
            where: {
                category: req.params.catName
            }
        });

        const videoArr = allVideos.map((video) => video.get({plain: true}));
        // console.log(videoArr);
        res.status(200).json(videoArr);
    }catch(err) {
        res.status(500).json(err);
    }
});

module.exports = router;