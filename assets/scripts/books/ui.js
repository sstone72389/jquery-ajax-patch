'use strict'

const onSuccess = function (data) {
  if (!data) {
    console.warn('Either you deleted something, or something went wrong.')
  } else if (data.book) {
    console.log(data.book)
  } else {
    console.table(data.books)
  }
}

const onUpdateSuccess = function (data) {
  console.log('You changed a title!!!')
}
const onError = function (response) {
  console.error(response)
}

module.exports = {
  onSuccess,
  onUpdateSuccess,
  onError
}
