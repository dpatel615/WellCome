const router = require('express').Router();
const userRoutes = require('./userRoutes');
const ProfileRoutes = require('./ProfileRoutes');
const dashBRoutes = require('./dashboardRoutes');
const favRoutes = require('./favRoutes');

router.use('/users', userRoutes);
router.use('/profiles', ProfileRoutes);


router.use('/dashboard', dashBRoutes);
router.use('/favorites', favRoutes);

module.exports = router;
