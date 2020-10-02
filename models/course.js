// requirement modules 
const express = require(`express`);
const mongoose = require(`mongoose`);

// type of date enter to database
const schema = new mongoose.Schema({
  tags: [String],
  date: {type : Date, default : Date.now},
  name: String,
  author: String,
  isPublished: Boolean
});


const Course = module.exports = mongoose.model(`course`, schema);