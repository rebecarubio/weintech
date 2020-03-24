const express = require ('express');
const app = express();
const morgan = require('morgan');
const path = require('path');

const { mongoose } = require('./database')

//Settings
app.set('port', process.env.PORT || 3000)
//Middleware
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use('/api/task', require('./routes/task.routes'))

//Static files
app.use(express.static(path.join(__dirname, 'public')));



//Starting server
app.listen(app.get('port'), ()=>{
    console.log(`server on port ${app.get('port')}`);
})