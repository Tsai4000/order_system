const express = require("express")

const OrderCtrl = require("../controllers/order")

const router = express.Router()

router.post("/order", OrderCtrl.createOrder)
router.delete("/order/:userId", OrderCtrl.deleteOrder)
router.get("/order/:userId", OrderCtrl.getOrderById)
router.get("/orderList", OrderCtrl.getOrderUncomplete)

module.exports = router
