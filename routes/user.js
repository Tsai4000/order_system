const express = require("express")

const UserCtrl = require("../controllers/user")

const router = express.Router()

router.post("/login", UserCtrl.login)

module.exports = router
