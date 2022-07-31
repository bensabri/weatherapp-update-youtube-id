const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mysql = require('mysql');
const port = 5000;

const db = mysql.createPool({
	host: 'localhost',
	user: 'root',
	password: process.env.DB_PASSWORD,
	database: 'id_video',
});

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

// app.get();

app.post('/api/insert', (req, res) => {
	const { country, city, youtubeId } = req.body;
	const sqlInsert =
		'INSERT INTO youtube_ids (country, city, youtube_id) VALUES (?,?,?) ';
	db.query(sqlInsert, [country, city, youtubeId], (err, result) => {
		console.log(result);
		console.log(err);
	});
});

app.listen(port, () => {
	console.log('Running on port 3001');
});
