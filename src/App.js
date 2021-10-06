import './App.css';
import { useState } from 'react';
import axios from 'axios';
import AddCity from './components/AddCity';
import UpdateCity from './components/UpdateCity';

function App() {
	const [country, setCountry] = useState('');
	const [city, setCity] = useState('');
	const [youtubeId, setYoutubeId] = useState('');
	const [dataCity, setDataCity] = useState([]);

	const showCity = () => {
		axios.get('http://localhost:5000/city').then((res) => {
			setDataCity(res.data);
		});
	};

	return (
		<div className="App">
			<AddCity
				setCountry={setCountry}
				setCity={setCity}
				setYoutubeId={setYoutubeId}
				country={country}
				city={city}
				youtubeId={youtubeId}
			/>
			<button onClick={showCity}>Show City</button>
			<UpdateCity dataCity={dataCity} />
		</div>
	);
}

export default App;
