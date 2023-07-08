const express = require('express');
const router = express.Router();

const leadController = require('../controller/leadController')


router.post('/', leadController.create)
router.get('/', leadController.all)

module.exports = router;