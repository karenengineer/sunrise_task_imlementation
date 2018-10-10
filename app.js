import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import passport from 'passport';

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());

require('./server/routes')(app);

app.get('/', (req, res) => res.status(200).send({
    message: 'Welcome',
}));

module.exports = app;
