// requirement modules 
const express = require(`express`);
const mongoose = require(`mongoose`);
const path = require(`path`)
const ejs = require('ejs');
const bodyParser = require('body-parser');
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())

//maddleware from routes
const viewCourses = require(`./routes/home`);
const AddPage = require(`./routes/add`);
const singleCourse = require(`./routes/single-course`);
const editCourse = require(`./routes/edit`);

app.use(express.static(path.join(__dirname,`public`)))
// route@: '/'
app.use(viewCourses);

// route@: '/add'
app.use(AddPage);

// route@: '/:id'
app.use(singleCourse);

// route@: '/edit/:id'
app.use(editCourse);


// acess to tamplate engine
app.set(`views`, path.join(__dirname,`view`));
app.set(`view engine`, `ejs`)

// connect to database
mongoose.connect(`mongodb://localhost/mongo-exercises`, { useNewUrlParser: true , useUnifiedTopology: true})
.then(() => console.log(`connecting to database...`))
.catch(err => console.log(`not connect ${err}`));



app.listen(3000, () => console.log(`connecting to 3000...`))