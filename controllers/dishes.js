const Dishes = require("../models/dishes")

createDishes = (req, res) => {
  const body = req.body

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a dishes"
    })
  }

  const dishes = new Dishes(body)

  if (!dishes) {
    return res.status(400).json({ success: false, error: err })
  }

  dishes
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        id: dishes._id,
        message: "Dishes created"
      })
    })
    .catch(error => {
      return res.status(204).json({
        error,
        message: "write fail"
      })
    })
}

getDishesByName = async (req, res) => {
  await Dishes.findOne(
    { dishes_name: req.params.dishes_name },
    (err, dishes) => {
      if (err) {
        return res.status(400).json({ success: false, error: err })
      }

      if (!dishes) {
        return res
          .status(404)
          .json({ success: false, error: `Dishes not found` })
      }
      return res.status(200).json({ success: true, data: dishes })
    }
  ).catch(err => console.log(err))
}

module.exports = {
  createDishes,
  getDishesByName
}
