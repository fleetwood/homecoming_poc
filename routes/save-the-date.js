// const config = require('./../comp/config')
//     , mocks = require('./../comp/mocks');

const init = (app) => {
  app.get('/save-the-date', (req, res) => {
    res.render('save-the-date', {
      title: 'Peloton Homecoming 2020 - Save The Date!',
      layout: 'layouts/default',
      data: {}
    });
  });
};

module.exports = {
  init
};
