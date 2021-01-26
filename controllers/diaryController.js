//import model
const entries = require("../model/db");

/*
  @desc     Get all entries
  @route    GET /api/v1/entries
  @access   Private
 */
exports.getEntries = (req, res, next) => {
	res.json(entries);
};

/*
  @desc     Display a specific entry, search by id
  @route    GET /entries/:id
  @access   Private
 */
exports.getSelectedEntry = (req, res, next) => {
	const result = entries.filter(
		(entry) => entry.id === parseInt(req.params.id)
	);
	// console.log(result);
	result.length
		? res.json(result)
		: res.status(404).json({ alert: `no entry with id ${req.params.id}` });
};

/*
  @desc    Add new entry
  @route    POST /entries
  @access   Private
 */
exports.addEntry = (req, res, next) => {
	if (!req.body.id || !req.body.title || !req.body.content) {
		res
			.status(500)
			.json({ error: "new entry must contain an id, title and content" });
	} else if (entries.map((entry) => entry.id).includes(req.body.id)) {
		res
			.status(403)
			.json({ error: `note with id ${req.body.id} already exists` });
	} else {
		entries.push(req.body);
		res.json({ success: "new entry added", entries });
	}
};

/*
  @desc     update an entry
  @route    PUT /entries/:id
  @access   Private
 */
exports.modifyEntry = (req, res, next) => {
	const isEntryPresent = entries.some(
		(entry) => entry.id === parseInt(req.params.id)
	);
	if (isEntryPresent) {
		entries.map((entry) => {
			if (entry.id === parseInt(req.params.id)) {
				entry.title = req.body.title ? req.body.title : entry.title;
				entry.content = req.body.content ? req.body.content : entry.content;
			}
		});
		res.json({ success: `entry of id ${req.params.id} was updated.`, entries });
	} else {
		res.status(404).json({ alert: `no entry with id ${req.params.id}` });
	}
};

/*
  @desc     delete an entry
  @route    DELETE /entries/:id
  @access   Private
 */
exports.deleteEntry = (req, res, next) => {
	const result = entries.some((entry) => entry.id === parseInt(req.params.id));
	// console.log(result);
	result
		? res.json({
				success: `entry of id ${req.params.id} deleted`,
				entries: entries.filter(
					(entry) => entry.id !== parseInt(req.params.id)
				),
		  })
		: res.status(404).json({ alert: `no entry with id ${req.params.id}` });
};
