'use strict';

const app = require('../app.js');

const index = function () {
  return $.ajax({
    url: app.host + '/books',
    method: 'GET',
  });
};

const show = function (id) {
  return $.ajax({
    url: app.host + '/books/' + id,
    method: 'GET',
  });
};

const create = function (data) {
  return $.ajax({
    url: app.host + '/books/',
    method: 'POST',
    data: data
  });
};

const destroy = function (data) {

  let id = data.book.id;

  return $.ajax({
    url: app.host + '/books/' + id,
    method: 'DELETE',
  });
};

const update = function(data){
  let id = data.book.id;

  return $.ajax({
    url: app.host + '/books/' + id,
    method: 'PATCH',
    data: data,
  });
};

module.exports = {
  index,
  show,
  create,
  destroy,
  update,
};
