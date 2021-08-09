'use strict';

const express = require('express');
const app = express()



const errorHandler = require('./error-handlers/500.js')
const notFoundError = require('./error-handlers/404.js')

const logger = require('./middleware/logger.js')
const validator = require('./middleware/validator.js')

// global -> app level middleware // log a request
app.use(express.json());
app.use(logger);

//
app.get('/', (req, res) => {
    res.status(200).send('Hello World :)');
});

// build out routes -> with querystring & request parameter
app.get('/person', logger, validator, (req, res, next) => {
    let resObject = {
      name: req.query.name
    }
    res.status(200).json(resObject) 
  })
// error handlers
app.use('*', notFoundError )
app.use(errorHandler)



// listening function

function start(PORT){
    app.listen(PORT, () => {
        console.log(`listening on ${PORT}`);
    })
}


module.exports = {
    server: app,
    start: start
}