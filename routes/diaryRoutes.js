const express = require("express");
const router = express.Router();
const {
	getEntries,
	addEntry,
	modifyEntry,
	deleteEntry,
	getSelectedEntry,
} = require("../controllers/diaryController");
const { addNewUser, loginUser } = require("../controllers/userController");

// @desc    Sign up - add new user
//@route    Post /api/v1/signup
router.post("/signup", addNewUser);

// @desc    Login for registered users
//@route    Post /api/v1/auth
router.post("/auth", loginUser);

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
