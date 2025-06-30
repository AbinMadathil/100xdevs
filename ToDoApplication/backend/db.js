const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/todoapp', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("MongoDB connected successfully");
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

mongoose.model('Todo', todoSchema);


module.exports = {
    todoSchema
}