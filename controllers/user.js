const User = require("../models/user")

login = async (req, res) => {
	await User.findOne({ userId: req.params.userId }, (err, user) => {
		if (err) {
			return res.status(400).json({ success: false, error: err })
		}

		if (!user) {
			return res
				.status(404)
				.json({ success: false, error: `Wrong password or ID` })
		}

		if (user.password != req.params.password) {
			return res.status(204).json({ error_messages: `Wrong password or ID` })
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
