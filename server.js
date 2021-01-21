const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const entries = require("./db");

const PORT = process.env.PORT;

const app = express();

//middleware
app.use(express.json());

//Routes

// @desc    Landing page
//@route    GET /
app.get("/", (req, res) => {
	res.send("Home page working alright");
});

// @desc    Display all entries
//@route    GET /api/v1/entries
app.get("/api/v1/entries", (req, res) => {
	res.json(entries);
});

// @desc    Display a specific entry, search by id
//@route    GET /api/v1/entries/:id
app.get("/api/v1/entries/:id", (req, res) => {
	const result = entries.filter(
		(entry) => entry.id === parseInt(req.params.id)
	);
	// console.log(result);
	result.length
		? res.json(result)
		: res.status(404).json({ alert: `no entry with id ${req.params.id}` });
});

// @desc    Add new entry
//@route    POST /api/v1/entries
app.post("/api/v1/entries", (req, res) => {
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
});

// @desc    update an entry
//@route    PUT /api/v1/entries/:id
app.put("/api/v1/entries/:id", (req, res) => {
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
});

// @desc    delete an entry
//@route    DELETE /api/v1/entries/:id
app.delete("/api/v1/entries/:id", (req, res) => {
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
});

app.listen(PORT, console.log(`Server running on port ${PORT}`));