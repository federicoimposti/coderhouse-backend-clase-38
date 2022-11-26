const MongoContainer = require('../mongo');
const Item = require('../../models/Products');

class ProductsContainer extends MongoContainer {
    constructor () {
      super(Item) 
    }
}

module.exports = { ProductsContainer };