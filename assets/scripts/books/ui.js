'use strict'

const onSuccess = function (data) {
  console.log("data is ", data);
  if (!data) {
    console.warn('Either you deleted something, or something went wrong.')
  } else if (data.book) {
    console.log(data.book)
  } else {
    console.table(data.books)
  }
}

const onUpdateSuccess = function () {
  console.log("You successfully updated the book!")
}

const onError = function (response) {
  console.error(response)
}

module.exports = {
  onSuccess,
  onUpdateSuccess,
  onError
}
