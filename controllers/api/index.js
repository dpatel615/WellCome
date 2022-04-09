const router = require('express').Router();
const userRoutes = require('./userRoutes');
const dashBRoutes = require('./dashboardRoutes');

router.use('/users', userRoutes);
router.use('/dashboard', dashBRoutes);

module.exports = router;
