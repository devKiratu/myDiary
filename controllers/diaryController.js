const mongoose = require("mongoose");
//import model
const entrySchema = require("../model/Entry");
const { findByIdAndUpdate } = require("../model/User");
const User = require("../model/User");

let Entry = mongoose.model("Entry", entrySchema);
/*
  @desc     Get all entries by a user
  @route    GET /api/v1/entries
  @access   Private
 */
exports.getEntries = async (req, res, next) => {
	try {
		const entries = await User.findById(req.user.id);

		return res.status(200).json({
			success: true,
			count: entries.length,
			data: entries.entries,
		});
	} catch (err) {
		return res.status(500).json({
			success: false,
			error: "Server Error",
		});
	}
};

/*
  @desc     Display a specific entry, search by id
  @route    GET /entries/:id
  @access   Private
 */
exports.getSelectedEntry = async (req, res, next) => {
	try {
		// const user = await User.findById(req.user.id);
		const entry = await User.findById(req.user.id);
		// console.log(entry);
		if (!entry) {
			return res.status(404).json({
				success: false,
				error: `Entry of id ${req.params.id} does not exist`,
			});
		}
		const { entries } = entry;
		const requiredEntry = entries.filter((item) => item.id === req.params.id);
		// console.log(entries);
		// console.log(requiredEntry);

		return res.status(200).json({
			success: true,
			data: requiredEntry,
		});
	} catch (err) {
		console.log(err);
		return res.status(500).json({
			success: false,
			error: "Server Error",
			err,
		});
	}
};

/*
  @desc    Add new entry
  @route    POST /entries
  @access   Private
 */
exports.addEntry = async (req, res, next) => {
	try {
		const { title, content } = req.body;

		const createdEntry = await User.findByIdAndUpdate(
			req.user.id,
			{ $push: { entries: req.body } },
			{ new: true }
		);

		// console.log(createdEntry);

		// const newEntry = await Entry.create( req.body );

		return res.status(201).json({
			success: true,
			data: createdEntry,
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
				err,
			});
		}
	}
};

/*
  @desc     update an entry
  @route    PUT /entries/:id
  @access   Private
 */
exports.modifyEntry = async (req, res, next) => {
	try {
		const user = await User.findById(req.user.id);

		const entries = user.entries;
		// console.log(entries);

		entries.map((entry) => {
			if (entry.id === req.params.id) {
				entry.title = req.body.title ? req.body.title : entry.title;
				entry.content = req.body.content ? req.body.content : entry.content;
				return entry;
			}
			return entry;
		});

		const saved = await user.save();
		// console.log(saved);

		return res.status(200).json({
			success: true,
			saved,
		});

		// const entry = await Entry.findById(req.params.id);
		// if (!entry) {
		// 	return res.status(404).json({
		// 		success: false,
		// 		error: `Entry of id ${req.params.id} does not exist`,
		// 	});
		// }

		// const modifiedEntry = {
		// 	title: req.body.title ? req.body.title : entry.title,
		// 	content: req.body.content ? req.body.content : entry.content,
		// };

		// await Entry.findByIdAndUpdate(
		// 	req.params.id,
		// 	modifiedEntry,
		// 	{ new: true },
		// 	(err, result) => {
		// 		return res.status(200).json({
		// 			success: true,
		// 			data: result,
		// 		});
		// 	}
		// );
	} catch (err) {
		console.log(err);
		return res.status(500).json({
			success: false,
			error: "Server Error",
			err,
		});
	}
};

/*
  @desc     delete an entry
  @route    DELETE /entries/:id
  @access   Private
 */
exports.deleteEntry = async (req, res, next) => {
	try {
		const user = await User.findById(req.user.id);

		const entries = user.entries;
		// console.log(entries);

		const updated = entries.filter((entry) => entry.id !== req.params.id);

		// console.log(updated);
		user.entries = updated;

		const updatedUser = await user.save();

		return res.status(200).json({
			success: true,
			updatedUser,
		});

		// const entry = await Entry.findById(req.params.id);

		// if (!entry) {
		// 	return res.status(404).json({
		// 		success: false,
		// 		error: `Entry of id ${req.params.id} does not exist`,
		// 	});
		// }

		// await entry.remove();

		// return res.status(200).json({
		// 	success: true,
		// 	data: {},
		// });
	} catch (err) {
		return res.status(500).json({
			success: false,
			error: "Server Error",
		});
	}
};
