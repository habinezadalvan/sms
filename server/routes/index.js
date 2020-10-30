const express = require('express');
const router = express.Router();

const sms = require('../controllers/index');


router.post('/sms', sms.sms);


module.exports = router;