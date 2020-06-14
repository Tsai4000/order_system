const express = require("express")

const DishesCtrl = require("../controllers/dishes")

const router = express.Router()

router.post("/dishes", DishesCtrl.createDishes)
router.get("/dishes/:dishes_name", DishesCtrl.getDishesByNsme)

module.exports = router
