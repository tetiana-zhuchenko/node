const { myName, myHobbies, myFavoriteNumber } = require('./multiple-export')
const greetingfn = require('./single-export')
const {
  myName: myOtherName,
  myFriendName,
  myGreatHobbies,
} = require('./export-and-import')
// const exportedObject = require('./multiple-export')
// const { myName, myHobbies, myFavoriteNumber } = exportedObject

// console.log(arguments.callee.toString())
// console.log(__filename)
// console.log(__dirname)
// console.log(require)
// console.log(exportedObject)

myHobbies.push('running')

console.log(greetingfn(myName))
console.log(myName)
console.log(myHobbies)
console.log(myFavoriteNumber)
console.log(myOtherName)
console.log(myFriendName)
console.log(myGreatHobbies)
