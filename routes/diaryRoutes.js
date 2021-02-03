const express = require("express");
const router = express.Router();
const {
	getEntries,
	addEntry,
	modifyEntry,
	deleteEntry,
	getSelectedEntry,
} = require("../controllers/diaryController");
const {
	addNewUser,
	loginUser,
	loadUser,
} = require("../controllers/userController");
const auth = require("../middleware/auth");

// @desc    Sign up - add new user
//@route    Post /api/v1/signup
router.post("/signup", addNewUser);

// @desc    Login for registered users
//@route    Post /api/v1/auth
router.post("/auth", loginUser);

// @desc    checks the identity of currently authenticated user
//@route    Post /api/v1/auth/user
router.get("/auth/user", auth, loadUser);

// @desc    Display all entries
//@route    GET /entries
router.get("/entries", auth, getEntries);

// @desc    Display a specific entry, search by id
//@route    GET /entries/:id
router.get("/entries/:id", auth, getSelectedEntry);

// @desc    Add new entry
//@route    POST /entries
router.post("/entries", auth, addEntry);

// @desc    update an entry
//@route    PUT /entries/:id
router.put("/entries/:id", auth, modifyEntry);

// @desc    delete an entry
//@route    DELETE /entries/:id
router.delete("/entries/:id", auth, deleteEntry);

module.exports = router;
