const router = require('express').Router();
const { Content, Favorite } = require('../../models');
const withAuth = require('../../utils/auth');
const { route } = require('./userRoutes');
// const fetch = require('node-fetch');
// require('dotenv').config();

// POST route to add favorites
router.post('/', withAuth, async (req, res) => {
    const newContent = await Content.create({
        ...req.body,
    });

    const getContent = newContent.get({ plain: true });

    const newFav = await Favorite.create({
        user_id: req.session.user_id,
        content_id: getContent.id,
    });

    res.status(200).json(newFav);
});

module.exports = router;

