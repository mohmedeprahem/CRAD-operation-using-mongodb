// requirement modules
const express = require(`express`);
const router = express.Router();

// custom maddleware
const viewCourse = require(`../controller/course`);

// @disc: view course 
// @route: GET '/:id'
// @acess: public
router.get('/:id', viewCourse.viewCourse);

// @disc: remvove course 
// @route: GET '/remove/:id'
// @acess: public
router.get('/remove/:id', viewCourse.removeCourse);

module.exports = router;