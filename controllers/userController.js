const User = require("../model/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

/*
  @desc     Sign up new user
  @route    post /api/v1/signup
  @access   Private
 */
exports.addNewUser = async (req, res, next) => {
	try {
		const { username, email, password } = req.body;

		const newUser = {
			username,
			email,
			password,
		};

		//hash user password
		const salt = bcrypt.genSaltSync(10);
		const hash = bcrypt.hashSync(newUser.password, salt);
		newUser.password = hash;

		const createdUser = await User.create(newUser);

		const token = jwt.sign({ id: createdUser.id }, process.env.JWT_SECRET);

		const responseObj = {
			token,
			id: createdUser.id,
			username: createdUser.username,
			email: createdUser.email,
		};
		return res.status(201).json({
			success: true,
			user: responseObj,
		});
	} catch (err) {
		if (err.name === "ValidationError") {
			const messages = Object.values(err.errors).map((val) => val.message);

			return res.status(400).json({
				success: false,
				error: messages,
			});
		} else {
			return res.status(500).json({
				success: false,
				error: "Server Error",
			});
		}
	}
};
