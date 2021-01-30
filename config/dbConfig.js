const mongoose = require("mongoose");

async function connectDB() {
	try {
		const connected = await mongoose.connect(process.env.MONGO_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true,
			useFindAndModify: false,
		});
		console.log(`MongoDB connected: ${connected.connection.host}`);
	} catch (err) {
		console.error(`Error: ${err}, ${mongoose.connection.readyState}`);
		process.exit(1);
	}
}

module.exports = connectDB;
