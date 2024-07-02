import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const { connection } = await mongoose.connect(process.env.MONGODB_URL, {
            dbName: "Authentication",
        })
        console.log("db connected...");
    } catch (error) {
        console.log(error);
        console.log("Couldn't connect to Mongodb: " + error.message);
    }
}