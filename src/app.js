const express = require('express'),
      path = require('path'),
      morgan = require('morgan'),
      mysql = require('mysql'),
      myConnection = require('express-myconnection');

const app = express();
const handlebars = require('express-handlebars');

// importing routes
const customerRoutes = require('./routes/index');

// settings
app.set('port', process.env.PORT || 2828);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// app.set('view engine', 'hbs');
// app.engine('hbs', handlebars({
//   layoutsDir: `${__dirname}/views`
// }))

// middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql, {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'chunincrud'
}, 'single'));
app.use(express.urlencoded({extended: true}));

// routes
app.use('/', customerRoutes);

// static files
app.use(express.static(path.join(__dirname, 'public')));

// starting the server
app.listen(app.get('port'), () => {
  console.log(`server on port ${app.get('port')}`);
});
