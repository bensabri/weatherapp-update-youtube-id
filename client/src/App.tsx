import { useState, FC } from 'react';
import './App.css';
import { AddIdCity } from './components/AddIdCity';
import { Header } from './components/Header';

const App: FC = () => {
	const [country, setCountry] = useState<string>('');
	const [city, setCity] = useState<string>('');
	const [youtubeId, setYoutubeId] = useState<string>('');
	const [newId, setNewId] = useState<string>('');
	const [editingCity, setEditingCity] = useState<boolean>(false);
	const [dataCity, setDataCity] = useState<[]>([]);

	return (
		<div className="bg-gray-100 h-screen">
			<Header />
			<AddIdCity
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
