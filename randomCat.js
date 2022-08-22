const fs = require('fs')

const getRandomNumber = (listOfPath) => Math.floor(Math.random() * listOfPath.length)

function getPathToRandomImage() {
    const listOfImage = fs.readdirSync("./img"); 
    return `img/${listOfImage[getRandomNumber(listOfImage)]}`
}

module.exports = { getPathToRandomImage }