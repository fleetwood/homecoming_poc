// const config = require('./../comp/config')
//     , mocks = require('./../comp/mocks');

const init = (app) => {
  app.get('/schedule', (req, res) => {
    res.render('schedule', {
      title: 'Peloton Homecoming 2020 - Administrate the things!',
      layout: 'layouts/default',
      data: {}
    });
  });
};

module.exports = {
  init
};
