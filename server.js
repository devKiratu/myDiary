const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });
const connectDB = require("./config/dbConfig");
const router = require("./routes/diaryRoutes");

//connect db
connectDB();

const PORT = process.env.PORT;

const app = express();

//middleware
app.use(express.json());

//Routes
app.use("/api/v1", router);

app.listen(PORT, console.log(`Server running on port ${PORT}`));
