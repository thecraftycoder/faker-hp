const office = require('./office')
const hp = require('./hp')
const medical = require('./medical')
const witcher = require('./witcher')

module.exports = {
  randomItem: (args) => {
    return args[Math.floor(Math.random() * args.length)]
  },
  userEmail: (character) => {
    const nameArr = character.split(' ')
    if (nameArr.length >= 2) {
      return (character[0] + nameArr.pop()).toLowerCase() + '@email.com'
    } else {
      return (character).toLowerCase() + '@email.com'
    }
  },
  office: office,
  hp: hp,
  medical: medical,
  witcher: witcher
}
