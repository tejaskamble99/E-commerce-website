import mongoose from "mongoose";
import validator from "validator";
// User Schema
const schema = new mongoose.Schema({
    _id: {
        type: String,
        required: [true, "Enter Id"],
    },
    name: {
        type: String,
        required: [true, "Please enter Name"],
        minlength: [3, "Name must be at least 3 characters"],
        maxlength: [50, "Name must not exceed 50 characters"],
    },
    email: {
        type: String,
        unique: [true, "Email already exists"],
        required: [true, "Please enter Email"],
        validate: validator.default.isEmail,
    },
    photo: {
        type: String,
        required: [true, "Add Photo"],
        minlength: [5, "Photo URL must be at least 5 characters"],
    },
    role: {
        type: String,
        enum: ["admin", "user"],
        default: "user",
    },
    gender: {
        type: String,
        enum: ["male", "female"],
        required: [true, "Enter gender"],
    },
    dob: {
        type: Date,
        required: [true, "Enter DOB"],
    },
}, {
    timestamps: true,
});
// Virtual Attribute: Age
schema.virtual("age").get(function () {
    const today = new Date();
    const dob = this.dob;
    let age = today.getFullYear() - dob.getFullYear();
    if (today.getMonth() < dob.getMonth() ||
        (today.getMonth() === dob.getMonth() && today.getDate() < dob.getDate())) {
        age--;
    }
    return age;
});
// User Model
export const User = mongoose.model("User", schema);
