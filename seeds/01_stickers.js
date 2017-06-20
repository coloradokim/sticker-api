let stickers = require('../stickers');

exports.seed = function(knex, Promise) {
  return knex.raw('TRUNCATE sticker RESTART IDENTITY CASCADE;')
    .then(function () {

      return knex('sticker').insert(stickers);
    });
};
