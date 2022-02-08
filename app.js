const express = require('express');
const nunjucks = require('nunjucks');
const indexRouter = require('./routes');
const app = express();

nunjucks.configure('vues', {
    autoescape: true,
    express: app
});

app.use(express.json());

app.use('/img', express.static(__dirname + '/webroot/img'));
app.use('/css', express.static(__dirname + '/webroot/css'));
app.use('/js', express.static(__dirname + '/webroot/js'));


app.use('/', indexRouter);

const http = require('http').createServer(app);

const port = process.env.PORT || 3000;


http.listen(port, () => {
  console.log("Listenning at " + port);
});
