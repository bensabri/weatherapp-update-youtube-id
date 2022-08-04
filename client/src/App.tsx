import { useState, FC } from 'react';
import './App.css';
import { AddCity } from './components/AddCity';
import { Header } from './components/Header';
import { IdataCity, ICity } from './model';

const App: FC = () => {
	const [cities, setCities] = useState<ICity['city']>([
		{
			id: 0,
			country: '',
			city: '',
			youtube_id: '',
		},
	]);

	const [fetchCount, setFetchCount] = useState<number>(0);

	return (
		<div className="bg-gray-100 h-screen">
			<Header />
			<AddCity
				cities={cities}
				setCities={setCities}
				fetchCount={fetchCount}
				setFetchCount={setFetchCount}
			/>
		</div>
	);
};

export default App;
