const mongoose = require("mongoose");
const { entrySchema } = require("./Entry");

const userSchema = new mongoose.Schema({
	username: {
		type: String,
		required: [true, "Please provide a username"],
	},
	email: {
		type: String,
		required: [true, "Please provide a valid email address"],
		unique: true,
	},
	password: {
		type: String,
		required: [true, "Please provide a password"],
	},
	entries: [entrySchema],
});

module.exports = mongoose.model("User", userSchema);
