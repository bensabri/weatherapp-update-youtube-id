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

app.get('/api/get', (req, res) => {
	const sqlSelect = 'SELECT * FROM youtube_ids';
	db.query(sqlSelect, (err, result) => {
		res.status(201).send(result);
	});
});

app.post('/api/insert', (req, res) => {
	const { country, city, youtube_id, id } = req.body;
	const sqlInsert =
		'INSERT INTO youtube_ids (country, city, youtube_id, id) VALUES (?,?,?,?) ';
	db.query(sqlInsert, [country, city, youtube_id, id], (err, result) => {
		console.log(result);
		console.log(err);
	});
});

app.delete('/api/delete/:youtube_id', (req, res) => {
	const { youtube_id } = req.params;
	db.query(
		'DELETE FROM youtube_ids WHERE youtube_id = ?',
		youtube_id,
		(err, result) => {
			if (err) {
				console.log(err);
			} else {
				res.send(result);
			}
		}
	);
});

// app.put('/api/update:youtube_id', (req, res) => {
// 	const { youtube_id } = req.params;
// 	db.query('UPDATE SET youtube_ids youtube_id = WHERE youtube_id ?', [
// 		youtube_id,
// 	]);
// });

app.listen(port, () => {
	console.log('Running on port 5000');
});
