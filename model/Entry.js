const mongoose = require("mongoose");

exports.entrySchema = new mongoose.Schema({
	title: {
		type: String,
		required: [true, "Note must have title"],
	},
	content: {
		type: String,
		required: [true, "Cannot save empty note"],
	},
	created: {
		type: Date,
		default: Date.now,
	},
});

// module.exports = mongoose.model("Entry", entrySchema);
