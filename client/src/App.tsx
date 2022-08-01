import { useState, FC } from 'react';
import './App.css';
import { AddIdCity } from './components/AddIdCity';
import { Header } from './components/Header';
import { IdataCity } from './model';

const App: FC = () => {
	const [country, setCountry] = useState<string>('');
	const [city, setCity] = useState<string>('');
	const [youtubeId, setYoutubeId] = useState<string>('');
	const [dataCity, setDataCity] = useState<IdataCity[]>([]);
	const [fetchCount, setFetchCount] = useState<number>(0);

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
				fetchCount={fetchCount}
				setFetchCount={setFetchCount}
			/>
		</div>
	);
};

export default App;
