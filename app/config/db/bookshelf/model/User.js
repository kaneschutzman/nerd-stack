'use strict';

module.exports.register = function (bookshelf) {
  bookshelf.models.User = bookshelf.Model.extend({
    tableName: 'User',
    idAttribute: 'id'
  });
};