const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Dishes = new Schema({
  dishes_name: { type: String, required: true, index: { unique: true } },
  price: { type: Number, required: true }
})

module.exports = mongoose.model("dishes", Dishes)
