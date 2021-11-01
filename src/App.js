import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import AddCity from './components/AddCity';
import UpdateCity from './components/UpdateCity';

function App() {
	const [country, setCountry] = useState('');
	const [city, setCity] = useState('');
	const [youtubeId, setYoutubeId] = useState('');
	const [dataCity, setDataCity] = useState([]);
	const [editingCity, setEditingCity] = useState(false);
	const [newId, setNewId] = useState('');

	useEffect(() => {
		axios.get('http://localhost:5000/city').then((res) => {
			setDataCity(res.data);
		});
	}, []);

	return (
		<div className="App">
			<AddCity
				setCountry={setCountry}
				setCity={setCity}
				setYoutubeId={setYoutubeId}
				country={country}
				city={city}
				youtubeId={youtubeId}
				dataCity={dataCity}
				setDataCity={setDataCity}
			/>
			<UpdateCity
				dataCity={dataCity}
				setDataCity={setDataCity}
				editingCity={editingCity}
				setEditingCity={setEditingCity}
				newId={newId}
				setNewId={setNewId}
				country={country}
				city={city}
				youtubeId={youtubeId}
			/>
		</div>
	);
}

export default App;
