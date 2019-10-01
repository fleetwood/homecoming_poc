const config = require('../comp/config')
  , _ = require('underscore')
  , performance = require('perf_hooks').performance
  , mocks = require('./../comp/mocks');

const init = (app) => {
  app.get('/', (req, res) => {
    let passes = 1000, stats;
    const m0 = performance.now();
    
    for(var i = 1; i <= passes; i++) {
      stats = mocks.getMocks();
      console.log(`Pass [${i}] ${performance.now()}`)
    }
    
    const m1 = performance.now();
    stats.execution = Number.parseFloat((m1 - m0)/1000).toPrecision(2)+'s'; // in seconds
    stats.passes = passes;

    res.render('dashboard', {
      title: config.title,
      layout: 'layouts/default',
      instructors: mocks.instructors,
      events: mocks.events,
      members: mocks.members,
      stats
    });
  });
};

module.exports = {
  init
};
