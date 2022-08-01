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
		res.status(200).send(result);
	});
});

app.post('/api/insert', (req, res) => {
	res.status(201).send('Status: OK');
	const { country, city, youtube_id, id } = req.body;
	const sqlInsert =
		'INSERT INTO youtube_ids (country, city, youtube_id, id) VALUES (?,?,?,?) ';
	db.query(sqlInsert, [country, city, youtube_id, id], (err, result) => {
		console.log(result);
		console.log(err);
	});
});

app.delete('/api/delete/:id', (req, res) => {
	const { id } = req.params;
	db.query('DELETE FROM youtube_ids WHERE id = ?', id, (err, result) => {
		if (err) {
			console.log(err);
		} else {
			res.send(result);
		}
	});
});

app.put('/api/update', (req, res) => {
	const { id, youtube_id } = req.body;
	db.query('UPDATE youtube_ids SET youtube_id = ? WHERE id = ?', [
		youtube_id,
		id,
	]);
});

app.listen(port, () => {
	console.log('Running on port 5000');
});
