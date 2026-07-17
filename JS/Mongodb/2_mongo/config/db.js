const mongoose = require('mongoose');
const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.Mongo_URL);

        console.log("MongoDb connected successfully");

    }
    catch (error) {
        console.log("connection failed")
    }
    
};

module.exports = connectDB;