const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });
const connectDB = require("./config/dbConfig");
const router = require("./routes/diaryRoutes");

//connect db
connectDB();

const PORT = process.env.PORT || 5000;

const app = express();

//middleware
app.use(express.json());

//Routes
app.use("/api/v1", router);

//Serve static assets if in production
if (process.env.NODE_ENV === "production") {
	//set static folder
	app.use(express.static("client/build"));
	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
	});
}

app.listen(PORT, console.log(`Server running on port ${PORT}`));
