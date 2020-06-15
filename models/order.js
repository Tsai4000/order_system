const mongoose = require("mongoose")
const Schema = mongoose.Schema

const DishesObject = new Schema({
  dishes_name: { type: String, required: true },
  quantity: { type: Number, required: true }
})

const Order = new Schema(
  {
    user_id: { type: String, required: true },
    username: { type: String, required: true },
    dishes_list: { type: [DishesObject], required: true },
    retrieve_time: { type: Number, required: true },
    special_needs: { type: String, required: false },
    completed: { type: String, require: true },
    price: { type: Number, required: true }
  },
  { timestamps: true }
)

module.exports = mongoose.model("order", Order)
