const { Router } = require('express');

const router = Router();

router.use('/auth', require('./auth'));
router.use('/api', require('./api'));

module.exports = router;