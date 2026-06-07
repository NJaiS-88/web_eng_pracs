const mongoose = require("mongoose");

const express = require("express");

const app = express();

mongoose.connect("mongodb://localhost:27017/studentDB");

console.log("mongodb connected successfully");

const UserSchema = new mongoose.Schema({
    name: String,
    age: Number
});

const User = mongoose.model("user", UserSchema);

app.get('/', async(req, res) => {
    const user = await User.find();
    res.json(user);
});

app.listen(3000, () => {
    console.log("server started at port 3000");
})