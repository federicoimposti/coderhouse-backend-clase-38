const MongoContainer = require('../mongo');
const Message = require('../../models/Messages');

class ChatContainer extends MongoContainer {
    constructor () {
      super(Message) 
    }
}

module.exports = { ChatContainer };