'use strict';

module.exports = function(app) {
    var newsCtrl = require('./controllers/controller');

    app.route('/')
        .get(newsCtrl.index);

    app.route('/news')
        .get(newsCtrl.getAllNews);
};