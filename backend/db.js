import mongoose from "mongoose";

const connectDB = async () => {
    try {
        mongoose.connect(process.env.MONGO_URL)
        console.log("Połączono z bazą danych")
    } catch (error) {
        console.log("Błąd połączenia z bazą danych") 
    }
}

export default connectDB