import { useState, FC } from 'react';
import './App.css';
import { AddCity } from './components/AddCity';

const App: FC = () => {
	const [country, setCountry] = useState<string>('');
	const [city, setCity] = useState<string>('');
	const [youtubeId, setYoutubeId] = useState<string>('');
	const [newId, setNewId] = useState<string>('');
	const [editingCity, setEditingCity] = useState<boolean>(false);
	const [dataCity, setDataCity] = useState<[]>([]);

	return (
		<div className="font-bold">
			<AddCity
				country={country}
				city={city}
				youtubeId={youtubeId}
				dataCity={dataCity}
				setCountry={setCountry}
				setCity={setCity}
				setYoutubeId={setYoutubeId}
				setDataCity={setDataCity}
			/>
		</div>
	);
};

export default App;
