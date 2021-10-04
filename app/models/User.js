'use strict'

/**
 * 
 * @param {bookshelf} bookshelf instance of bookshelf
 */

module.exports = function User(bookshelf) {
  return bookshelf.model('User', {
    tableName: 'users',
    
  })
}