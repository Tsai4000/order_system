const express = require("express")

const UserCtrl = require("../controllers/user")

const router = express.Router()

router.get("/login/:userId/:password", UserCtrl.login)

module.exports = router
