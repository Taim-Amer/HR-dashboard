const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName : String,
    lastName : String,
    email : String,
    phoneNumber : String,
    age : Number,
    country : String,
    gender : String
});

const User = mongoose.model("customer", userSchema);

module.exports = User 