// lets create and invoke express
const express = require('express');
const app = express();
const PORT = 5000;

// middleware used to protect routes
const customMiddleware = (req, res, next) => {
    console.log("Middleware executed");
    next();
}


//if we use it like this it will apply to all the routes, first it will execute then all will do;
// app.use(customMiddleware);


// if we want to usein specific routes then we have to write it in the app get route

app.get('/', (req, res) => {
    console.log("home page");
    res.send("Hellow from home page");
});


app.get('/about', customMiddleware, (req, res) => {
    console.log("about page");
    res.send("Hellow from about");
});


app.listen(PORT, () => {
    console.log("server listening and running on", PORT);
});