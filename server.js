const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs')

const app = express();
const port = 3000;

app.use(cors({
	origin: '*'
}));

app.get('/random-image', (req, res) => {
	const randomNumber = Math.floor(Math.random() * 3);
	const listOfImage = fs.readdirSync('./img');
	res.sendFile(path.join(__dirname, `img/${listOfImage[randomNumber]}`));
})

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})
