const { myName, myHobbies } = require('./multiple-export')

const myFriendName = 'Alice'

module.exports.myName = myName
module.exports.myFriendName = myFriendName
// property names could be different from variable names
module.exports.myGreatHobbies = myHobbies
