const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Restaurant = new Schema(
    {
        name: {type:String, required: true},
        isopen: {type: Boolean, required: true}
    }
)

module.exports = mongoose.model('restaurant', Restaurant)