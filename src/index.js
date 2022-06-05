const express = require('express');
const bodyparser = require('body-parser');

const route = require('./routes/route');
const mongoose = require('mongoose');

let app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://sunil123:Sunil123@cluster0.h1ez7.mongodb.net/project-02?retryWrites=true&w=majority", { useNewUrlParser: true })
    .then(() => console.log('MongoDB is connected'))
    .catch(error => console.log(error));

app.use('/', route);

app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000));
});