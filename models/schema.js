const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Define the Schema (Structure)
const articleSchema = new Schema({
    username: String,
});

//Create a Model based on that Schema
const MyData = mongoose.model("MyData", articleSchema);

//Export the Model
module.exports = MyData;



