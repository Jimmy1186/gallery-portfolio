const mongoose = require("mongoose");

const portfolioSchema = new mongoose.Schema({
    title:String,
    date:Date,
    description:String,
    img:String,
    like:Number,
    link:String
})

module.exports = mongoose.models.portfolio || mongoose.model('portfolio',portfolioSchema)