const express = require('express'); //import express
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override');

const homeRoutes = require('./routes/home.routes');
const postsRoutes = require('./routes/posts.routes');
//initialize our app
const app = express();

//post middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

//templating set up
app.set('views', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//static route middleware
app.use(express.static(path.join(__dirname, 'public'))); //static css/img/js
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

//global vars
app.use((req, res, next) => {
  req.server_url = 'http://localhost:5000/';
  return next();
});

//routes middleware
app.use('/', homeRoutes);
app.use('/post', postsRoutes);

//api response
app.get('/api/names', (req, res, next) => {
  res.status(200).json({
    names: ['Ejike', 'Chinedu', 'Smart'],
  });
});

app.all('*', (req, res, next) => {
  res.render('404.ejs', {
    title: 'Error: 404',
    data: 'oops page not found',
    server_url: req.server_url,
  });
});

mongoose
  .connect('mongodb://localhost:27017/media', {
    // useNewUrlParser: true,
  })
  .then(() => {
    console.log('database is connected');
  })
  .catch((err) => {
    console.log(err);
  });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`app is running on http://localhost:${PORT}`);
});
