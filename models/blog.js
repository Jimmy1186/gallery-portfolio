const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title:String,
    date:Date,
    description:String,
    img:Object,
    like:Number,
})

module.exports = mongoose.models.blog || mongoose.model('blog',blogSchema)