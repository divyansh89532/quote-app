require('dotenv').config();

const express = require('express');
const expressLayout = require('express-ejs-layouts');
const cookieParser = require('cookie-parser');
const MongoStore = require('connect-mongo');
var bodyParser = require('body-parser');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
const connectDB = require('./server/config/db');



const PORT = 5000 || process.env.PORT;


connectDB();


app.use(express.static('public'));

app.use(expressLayout);
app.set('layout','./layouts/main');
app.set('view engine','ejs');

app.use('/',require('./server/routes/main'));

app.listen(PORT,()=>{
    console.log(`App listening at port ${PORT}`);
});
