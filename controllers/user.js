const User = require("../models/user")

login = async (req, res) => {
  const body = req.body.payload
  console.log(body)
  await User.findOne({ user_id: body.user_id }, (err, user) => {
    console.log(user)
    if (err) {
      return res.status(400).json({ success: false, error: err })
    }

    if (!user) {
      return res
        .status(404)
        .json({ success: false, error: `Wrong password or ID` })
    }

    if (user.password != body.password) {
      return res.status(204).json({ error_messages: `Wrong password` })
    }

    return res.status(200).json({
      success: true,
      data: { role: user.role, username: user.username }
    })
  }).catch(err => console.log(err))
}

module.exports = {
  login
}
