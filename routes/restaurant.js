const express = require('express')

const Restaurant = require('../controllers/restaurant')

const router = express.Router()

router.post('/restaurant', Restaurant.createRestaurant)
router.put('/restaurant/:id', Restaurant.updateRestaurant)
router.delete('/restaurant/:id', Restaurant.deleteRestaurant)
router.get('/restaurant/:id', Restaurant.getRestaurantById)
router.get('/restaurants', Restaurant.getRestaurants)

module.exports = router