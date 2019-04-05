const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: String,
    body: String,
    createdBy: String
});

module.exports = mongoose.model('Blog', blogSchema); 