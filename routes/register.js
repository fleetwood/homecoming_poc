// const config = require('./../comp/config')
//     , mocks = require('./../comp/mocks');

const init = (app) => {
  app.get('/register', (req, res) => {
    res.render('register', {
      title: 'Peloton Homecoming 2020 - Register Now!',
      layout: 'layouts/default',
      data: {}
    });
  });
};

module.exports = {
  init
};
