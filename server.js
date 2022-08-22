const express = require('express');
const cors = require('cors');
const path = require('path');
const { getPathToRandomImage } = require('./randomCat')

const app = express();
const port = 3000;

app.use(cors({
	origin: '*'
}));

app.get('/random-image', (req, res) => res.sendFile(path.join(__dirname, getPathToRandomImage())))

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})
