const express = require(`express`);
const router = express.Router();

// custom maddleware
const addPage = require(`../controller/course`)

// @disc: view add course page
// @route: GET '/course/=id'
// acess: public
router.get('/add', addPage.viewAddCourse);

// @disc: add new course
// @route: POST '/add'
// @acess: privat
router.post('/add', addPage.addCourse);



module.exports = router;