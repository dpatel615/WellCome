const router = require('express').Router();
const userRoutes = require('./userRoutes');
const ProfileRoutes = require('./ProfileRoutes');
const dashBRoutes = require('./dashboardRoutes');

router.use('/users', userRoutes);
router.use('/profiles', ProfileRoutes);


router.use('/dashboard', dashBRoutes);

module.exports = router;
