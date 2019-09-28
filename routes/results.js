// const config = require('./../comp/config')
//     , mocks = require('./../comp/mocks');

const init = (app) => {
  app.get('/results', (req, res) => {
    res.render('results', {
      title: 'Peloton Homecoming 2020 - The results are in!',
      layout: 'layouts/default',
      data: {}
    });
  });
};

module.exports = {
  init
};
