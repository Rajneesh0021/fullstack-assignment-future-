const mongoose = require('mongoose');

const mongoUri = process.env.Mongo_URL;

const connectDB = async () => {
    try {
        await mongoose.connect(mongoUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to MongoDB Atlas');
    } catch (err) {
        console.error('Failed to connect to MongoDB Atlas', err);
        process.exit(1);
    }
};

module.exports = connectDB;
