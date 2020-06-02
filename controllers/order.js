const Order = require("../models/order")

createOrder = async (req, res) => {
  const body = req.body

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a order"
    })
  }
  if ("price" in body) {
    return res.status(400).json({ success: false, error: "Wrong order" })
  }
  let price = 1000
  // TODO: get all dishes price and calculate.
  // await
  const order = new Order({ ...body, completed: false, price: price })

  if (!order) {
    return res.status(400).json({ success: false, error: err })
  }

  order
    .save()
    .then(response => {
      return res.status(201).json({
        success: true,
        id: response._id,
        price: price,
        message: "order created"
      })
    })
    .catch(error => {
      return res.status(400).json({
        error,
        message: "order not created"
      })
    })
}

deleteOrder = async (req, res) => {
  await Order.findOne(
    { _id: req.params.id, completed: false },
    (err, order) => {
      if (err) {
        return res.status(400).json({ success: false, error: err })
      }

      if (!order) {
        return res
          .status(404)
          .json({ success: false, error: `Order not found` })
      }

      order.completed = true
      order
        .save()
        .then(() => {
          return res.status(200).json({
            success: true,
            message: "order complete"
          })
        })
        .catch(err => {
          return res.status(400).json({
            success: false,
            error: err
          })
        })
    }
  ).catch(err => console.log(err))
}

getOrderById = async (req, res) => {
  await Order.findOne({ _id: req.params.id }, (err, order) => {
    if (err) {
      return res.status(400).json({ success: false, error: err })
    }

    if (!order) {
      return res.status(404).json({ success: false, error: `Order not found` })
    }
    return res.status(200).json({ success: true, data: order })
  }).catch(err => console.log(err))
}

getOrderUncomplete = async (req, res) => {
  await Order.findOne({ completed: false }, (err, order) => {
    if (err) {
      return res.status(400).json({ success: false, error: err })
    }

    if (!order) {
      return res
        .status(204)
        .json({ success: false, error: `no uncompleted order` })
    }
    return res.status(200).json({ success: true, data: order })
  }).catch(err => console.log(err))
}

module.exports = {
  createOrder,
  deleteOrder,
  getOrderById,
  getOrderUncomplete
}
