const express = require('express');
const app = express();
const path = require('path');
const { sendMail } = require('./services/nodemailer');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(require('./routes/index'));

app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000);
console.log('Server on port 3000')

sendMail({
    email: "joossesp@gmail.com",
    template: "report",

}).then(x => console.log('mail sent'))