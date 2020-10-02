// requirement modules
const express = require(`express`);
const router = express.Router();

// custom maddleware
const getCourses = require(`../controller/course`)


router.get(`/`, getCourses.getCourses);

module.exports = router;