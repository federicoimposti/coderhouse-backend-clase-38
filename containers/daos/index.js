const { ProductsContainer } = require('./products');
const { ChatContainer } = require('./chat');
const { UserContainer } = require('./register');

let productsDao = new ProductsContainer();
let chatDao = new ChatContainer();
let userDao = new UserContainer();

module.exports = { productsDao, chatDao, userDao };