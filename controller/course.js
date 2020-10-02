// database course
const Course = require(`../models/course.js`)
const mongoose = require(`mongoose`);


// @desc: get courses
// @route: GET '/'
// @acess: public
exports.getCourses = async (req, res) => {
  try {
    const courses = await Course.find();
      res.render(`index`, {
        courses: courses
      });
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
}

// @disc: view add course page
// @route: GET '/course/=id'
// @acess: public
exports.viewAddCourse = (req, res) => {
  res.render('add')
}

// @disc: add new course
// @route: POST '/add'
// @acess: privat
exports.addCourse = (req, res) => {
  async function newCourse(){ 
  
    let course = new Course();
    course.name = req.body.name;
    course.tags = req.body.tags.split(',');
    course.author = req.body.author;
    course.isPublished = (req.body.isPublished == 'true');
    await course.save(err => {
      if(err){
        console.log(err);
      } else {
        res.redirect('/');
      }
    }); 
  } 
  newCourse();
}

// @disc: view course 
// @route: GET '/:id'
// @acess: public
exports.viewCourse = async (req, res) => {
  try {
    const course = await Course.find({_id: req.params.id})
      res.render('singerCourse',{
        course: course[0]
      })
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
}

// @disc: view edit course page
// @route: get '/edit/:id'
// @acess: public
exports.viewEdit = (req, res) => {
  async function getCourses(){
    await Course.findById(req.params.id, (err, course) => {
      if(err){
        console.log(err);
      } else {
        res.render('edit',{
          course: course
        })
      }
      
    });
  }
  getCourses();
}

// @disc: edit course
// @route: POST '/edit/:id'
// @acess: public
exports.editCourse = (req, res) => {
  async function edit(){
    await Course.findById(req.params.id, (err,course) => {
      course.name = req.body.name;
      course.tags = req.body.tags.split(',');
      course.author = req.body.author;
      course.isPublished = (req.body.isPublished == 'true');
      course.save();
      res.redirect('/');
    });
  }
  edit();
}

// @disc: remvove course 
// @route: GET '/:id'
// @acess: public
exports.removeCourse = (req, res) => {
  async function rCourse(){
    await Course.remove({_id: req.params.id});
    res.redirect('/');
  }
  rCourse();
}