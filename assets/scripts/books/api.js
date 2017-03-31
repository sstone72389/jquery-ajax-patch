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

const update = function (data) {
  return $.ajax({
    url: app.host + '/books/' + data.book.id,
    method: 'PATCH',
    data
  })
}

const destroy = function (id) {
  return $.ajax({
    url: app.host + '/books/' + id,
    method: 'DELETE'
  })
}

module.exports = {
  index,
  show,
  update,
  destroy
}
