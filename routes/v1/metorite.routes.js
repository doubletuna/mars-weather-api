const express = require('express')
const router = express.Router()
const meteoriteController = require('../../controllers/meteorite')

router.get('/meteorites/filter/:filter?', meteoriteController.getMeteorites)

module.exports = router
