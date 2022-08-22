const express = require('express');
const cors = require('cors');
const path = require('path');
const { getPathToRandomImage } = require('./randomCat')

const app = express();
const port = process.env.PORT || 3000;

app.use(cors({
	origin: '*'
}));

app.get('/api/randomimage ', (req, res) => res.sendFile(path.join(__dirname, getPathToRandomImage())))

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})
