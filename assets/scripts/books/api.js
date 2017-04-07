'use strict'

const app = require('../app.js')

const index = function () {
  return $.ajax({
    url: app.host + '/books',
    method: 'GET'
  })
}

const show = function (id) {
  return $.ajax({
    url: app.host + '/books/' + id,
    method: 'GET'
  })
}

const destroy = function (id) {
  return $.ajax({
    url: app.host + '/books/' + id,
    method: 'DELETE'
  })
}

const update = function (data) {
  return $.ajax({
    url: app.host + '/books/' + data.book.id,
    method: 'PATCH',
    data
  })
}

module.exports = {
  index,
  show,
  destroy,
  update
}
