const express = require("express");
const router = express.Router();
const {
	getEntries,
	addEntry,
	modifyEntry,
	deleteEntry,
	getSelectedEntry,
} = require("../controllers/diaryController");

// @desc    Display all entries
//@route    GET /entries
router.get("/entries", getEntries);

// @desc    Display a specific entry, search by id
//@route    GET /entries/:id
router.get("/entries/:id", getSelectedEntry);

// @desc    Add new entry
//@route    POST /entries
router.post("/entries", addEntry);

// @desc    update an entry
//@route    PUT /entries/:id
router.put("/entries/:id", modifyEntry);

// @desc    delete an entry
//@route    DELETE /entries/:id
router.delete("/entries/:id", deleteEntry);

module.exports = router;
