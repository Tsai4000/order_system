const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")

const db = require("./db")
const testRouter = require("./routes/test-router")
const OrderRouter = require("./routes/order")
const dishesRouter = require("./routes/dishes")
const userRouter = require("./routes/user")

const app = express()
const apiPort = 3000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

db.on("error", console.error.bind(console, "MongoDB connection error:"))

app.get("/", (req, res) => {
  res.send("Hello World!")
})
app.use("/api", userRouter)
app.use("/api", testRouter)
app.use("/api", dishesRouter)
app.use("/api", testRouter)
app.use("/api", OrderRouter)

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))
