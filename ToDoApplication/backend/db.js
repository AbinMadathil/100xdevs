const mongoose = require('mongoose');
const nconf = require('nconf');

nconf.argv().env().file({file: "./development.json"});

const connectDB = async () => {
    try {
        const connection = await mongoose.connect(nconf.get("MONGODB_CONNECTION_STRING"), {
        });
        console.log("MongoDB connected successfully", connection.connection.host);
    } catch (error) {
        console.error("MongoDB connection failed:", error);
        process.exit(1);
    }
}

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    isCompleted: Boolean
});

const ToDo = mongoose.model('Todo', todoSchema);


module.exports = {
    ToDo,
    connectDB
}