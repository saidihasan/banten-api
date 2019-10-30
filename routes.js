'use strict';

module.exports = function(app) {
    var todoList = require('./controllers/controller');

    app.route('/')
        .get(todoList.index);

    app.route('/users')
        .get(todoList.users);
};