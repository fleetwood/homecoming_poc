const config = require('../comp/config')
    , mocks = require('../comp/mocks');

const init = (app) => {
  app.get('/', (req, res) => {
    res.render('dashboard', {
      title: config.title,
      layout: 'layouts/default',
      data: {
        instructors: mocks.instructors,
        events: mocks.events,
        members: mocks.members,
        stats: mocks.statistics
      }
    });
  });
};

module.exports = {
  init
};
