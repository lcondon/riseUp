const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String },
  date: { type: String, required: true },
  text: { type: String, required: true },
  url: { type: String },
  image: { type: String },
  comments: { type: Array }
});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;
