import express from 'express';
const app = express();
import mysql from 'mysql';
import cors from 'cors';

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
	user: 'root',
	host: 'localhost',
	password: 'bena1708',
	database: 'livecityyoutube',
});

app.post('/create', (req, res) => {
	const country = req.body.country;
	const city = req.body.city;
	const youtubeId = req.body.youtubeId;

	db.query(
		'INSERT INTO youtubecity (country, city, youtubeId) VALUES (?,?,?)',
		[country, city, youtubeId],
		(err, result) => {
			if (err) {
				console.log(err);
			} else {
				res.send('Values Inserted');
			}
		}
	);
});

app.get('/city', (req, res) => {
	db.query('SELECT * FROM youtubecity', (err, result) => {
		if (err) {
			console.log(err);
		} else {
			res.status(200).send(result);
		}
	});
});

app.put('/update', (req, res) => {
	const id = req.body.id;
	const youtubeid = req.body.youtubeid;
	db.query(
		'UPDATE youtubecity SET youtubeid = ? WHERE id = ?',
		[youtubeid, id],
		(err, result) => {
			if (err) {
				console.log(err);
			} else {
				res.send(result);
			}
		}
	);
});

app.delete('/delete/:id', (req, res) => {
	const id = req.params.id;
	db.query('DELETE FROM youtubecity WHERE id = ?', id, (err, result) => {
		if (err) {
			console.log(err);
		} else {
			res.send(result);
		}
	});
});

app.listen(5000, () => {
	console.log('listen on port 5000');
});
