// lets create and invoke express
const express = require('express');
const app = express();
const PORT = 5000;

// lets connect mongodb server to the project
const mongoose = require('mongoose');
const { MONGOURI } = require('./keys');


// lets write the mongodb connection code, mongoose works as a pipeline to connect to the mongodb database
mongoose.connect(MONGOURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true

});
mongoose.connection.on('connected', () => {
    console.log('Connected to Mongodb server');
});

mongoose.connection.on('error', (error) => {
    console.log('Error:', error);
});


// includes models
require('./models/user');
require('./models/post');

// include routes
app.use(express.json()); //need to parse json data
app.use(require('./routes/auth'));
app.use(require('./routes/post'));



app.listen(PORT, () => {
    console.log("server listening and running on", PORT);
});