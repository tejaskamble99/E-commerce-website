import mongoose from "mongoose";
export const connectDB = () => {
    mongoose.connect("mongodb://localhost:27017", {
        dbName: "Ecomerce_101",
    }).then((c) => console.log(`Connected to DB ${c.connection.host}`))
        .catch((e) => console.log(e));
};
