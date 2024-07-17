import mongoose from 'mongoose';

const connectToMongoDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log("Connected to mongoDB");
    } catch (error) {
        console.log("Error Connecting to mongoDB", error.message);
    }
};

export default connectToMongoDb;