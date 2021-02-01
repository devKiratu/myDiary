const jwt = require("jsonwebtoken");

function auth(req, res, next) {
	//set token
	const token = req.header("x-auth-token");

	//check for token
	if (!token) res.status(401).json({ msg: "Unauthorized, access denied" });

	try {
		//verify token
		const decoded = jwt.verify(token, process.env.JWT_SECRET);
		console.log("the value of decoded is: ", decoded);

		//add user from payload
		req.user = decoded;

		next();
	} catch (error) {
		res.status(400).json({ msg: "token not valid" });
	}
}

module.exports = auth;
