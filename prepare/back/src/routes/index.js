const { Router } = require('express');
const express = require("express");

const router = Router();

router.use('/auth', require('./auth'));
router.use('/api', require('./api'));
router.use('/user', require('./user'));
router.use('/upload',require('./upload'));

module.exports = router;
