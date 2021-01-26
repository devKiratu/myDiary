//import model
const Entry = require("../model/Entry");

/*
  @desc     Get all entries
  @route    GET /api/v1/entries
  @access   Private
 */
exports.getEntries = async (req, res, next) => {
	try {
		const entries = await Entry.find();

		return res.status(200).json({
			success: true,
			count: entries.length,
			data: entries,
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
		const entry = await Entry.findById(req.params.id);

		if (!entry) {
			return res.status(404).json({
				success: false,
				error: `Entry of id ${req.params.id} does not exist`,
			});
		}
		return res.status(200).json({
			success: true,
			data: entry,
		});
	} catch (err) {
		// console.log(err);
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

		const newEntry = await Entry.create(req.body);

		return res.status(201).json({
			success: true,
			data: newEntry,
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

/*
  @desc     update an entry
  @route    PUT /entries/:id
  @access   Private
 */
exports.modifyEntry = async (req, res, next) => {
	try {
		const entry = await Entry.findById(req.params.id);

		if (!entry) {
			return res.status(404).json({
				success: false,
				error: `Entry of id ${req.params.id} does not exist`,
			});
		}

		const modifiedEntry = {
			title: req.body.title ? req.body.title : entry.title,
			content: req.body.content ? req.body.content : entry.content,
		};

		await Entry.findByIdAndUpdate(
			req.params.id,
			modifiedEntry,
			{ new: true },
			(err, result) => {
				return res.status(200).json({
					success: true,
					data: result,
				});
			}
		);
	} catch (err) {
		// console.log(err);
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
		const entry = await Entry.findById(req.params.id);

		if (!entry) {
			return res.status(404).json({
				success: false,
				error: `Entry of id ${req.params.id} does not exist`,
			});
		}

		await entry.remove();

		return res.status(200).json({
			success: true,
			data: {},
		});
	} catch (err) {
		return res.status(500).json({
			success: false,
			error: "Server Error",
		});
	}
};
