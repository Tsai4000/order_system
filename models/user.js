const mongoose = require("mongoose")
const Schema = mongoose.Schema

const User = new Schema(
  {
    userId: { type: String, required: true, index: { unique: true } },
    password: { type: String, required: true },
    username: { type: String, required: true },
    role: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = mongoose.model("user", User)
