// requirement modules
const express = require(`express`);
const router = express.Router();

// custom maddleware
const editPage = require(`../controller/course`);

// @disc: view edit course page
// @route: get '/edit/:id'
// @acess: public
router.get(`/edit/:id`, editPage.viewEdit);

// @disc: edit course
// @route: POST '/edit/:id'
// @acess: public
router.post(`/edit/:id`, editPage.editCourse)
module.exports = router;
