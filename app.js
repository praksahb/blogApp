const express               = require('express');
      app                   = express(),
      dotenv                = require('dotenv'),
      bodyParser            = require('body-parser'),
      mongoose              = require('mongoose'),
      passport              = require("passport"),
      User                  = require('./models/user'),
      LocalStrategy         = require('passport-local'),
      passportLocalMongoose = require('passport-local-mongoose');

//to read variables from .env
dotenv.config();

//setting up connection to database
const uri = process.env.MONGO_LOGIN;
mongoose.connect(uri, {useNewUrlParser : true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('Connected....')
});

app.set('view engine', 'ejs');
//app.set('views', 'views') || app.set('views', path.join(__dirname, 'views')); 

app.use(bodyParser.urlencoded({extended: true}));
//setting up authentication 
app.use(require('express-session')({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


const homeRoute = require('./routes/home'); 
app.use(homeRoute);

const registerRoute = require('./routes/register');
app.use(registerRoute);

//compress login, logout and possibly register routes into a single file called userAuth or something
const loginRoute = require('./routes/login');
app.use(loginRoute); 

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`App listening on ${port}`));