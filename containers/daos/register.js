const MongoContainer = require('../mongo');
const bcrypt = require('bcrypt');
const User = require('../../models/User');

class UserContainer extends MongoContainer {
    constructor () {
      super(User) 
    }

    async save(user) {
        const newUser = new User(user); 
        try {
          const userExist = await User.findOne({email: user.email});
          if (userExist) { 
            return false; 
          } else { 
            const hashPass = await bcrypt.hash(newUser.password, 10);
            newUser.password = hashPass; 
            await newUser.save();
            return newUser; 
          } 
        } catch (error) {
          console.log(error);
        }
    }
}

module.exports = { UserContainer };