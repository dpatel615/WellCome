const router = require('express').Router();
const userRoutes = require('./userRoutes');
const ProfileRoutes = require('./ProfileRoutes');


router.use('/users', userRoutes);
router.use('/profiles', ProfileRoutes);

module.exports = router;
