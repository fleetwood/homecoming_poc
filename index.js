const config = require('./comp/config');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express');
const favicon = require('serve-favicon');
const hbs = require('express-hbs');
const http = require('http');
const path = require('path');
const api = require('./api');
const apiUI = require('./api.ui');
const utils = require('./comp/utils');
const app = express();

const mocks = require('./comp/mocks');

app.use(function (req, res, next) {
    req.rawBody = '';
    req.on('data', (chunk) => req.rawBody += chunk);

    next();
});

app.use(favicon(path.join(__dirname, './', 'peloton.ico')))
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// set up handlebars ready for tabs
app.engine('hbs', hbs.express4({
    partialsDir: __dirname + '/views/partials'
}));
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views/');
app.use(express.static('public/'));

api.init(app);
apiUI.init(app);

app.get('/', (req, res) => {
    res.render('index', {
      domain: req.get('host'),
      protocol: req.protocol,
      title: config.title,
      layout: 'layouts/default',
      data: {
        instructors: mocks.instructors,
        events: mocks.events,
        members: mocks.members
      }
    });
  });

const server = http.createServer(app);
server.listen(config.port, null, function () {
    console.log('Express webserver configured and listening at http://localhost:' + config.port);
});
