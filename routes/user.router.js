const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user.controller');

router.route('/:id')
    .get(userCtrl.get);

module.exports = router;