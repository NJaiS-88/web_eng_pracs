const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/studentDB");

console.log("mongodb connected");

const UserSchema = mongoose.Schema({
    name: String,
    age: Number
});

const User = mongoose.model(
    "User", UserSchema
);

const user = new User({
    name: "jai",
    age: "19"
});

user.save();

console.log("data inserted");