const fs = require('fs')

function getPathToRandomImage() {
    const randomNumber = Math.floor(Math.random() * 10);
    const listOfImage = fs.readdirSync('./img');
    const randomCat = `img/${listOfImage[randomNumber]}`;
    
    return randomCat
}

module.exports = { getPathToRandomImage }