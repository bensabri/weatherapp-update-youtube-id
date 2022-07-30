import React, { useState } from 'react';
import axios from 'axios';
import './UpdateCity.css';
import SelectCity from './SelectCity';
import RemoveCity from './RemoveCity';

const UpdateCity = ({
	dataCity,
	setDataCity,
	setEditingCity,
	editingCity,
	setNewId,
	newId,
}) => {
	const [currentCity, setCurrentCity] = useState('');

	const selectedCity = dataCity.filter(
		(city) => currentCity === city.city || currentCity === ''
	);

	const updateYoutubeId = (id) => {
		axios
			.put('http://localhost:5000/update', { youtubeid: newId, id: id })
			.then((response) => {
				setDataCity(
					dataCity.map((city) => {
						return city.id === id
							? {
									id: city.id,
									country: city.country,
									city: city.city,
									youtubeid: newId,
							  }
							: city;
					})
				);
			});
	};
	return (
		<>
			<div className="update-container">
				<SelectCity
					dataCity={dataCity}
					setCurrentCity={setCurrentCity}
					setEditingCity={setEditingCity}
					editingCity={editingCity}
				/>
				{selectedCity.map((city, index) => (
					<div key={index} className="city-details-container">
						<p>Pays:{city.country}</p>
						<p>Ville: {city.city}</p>
						<p>Id: {city.youtubeid}</p>
						<button onClick={() => console.log(city.id)}>
							Open
						</button>
						<div
							className={`edit-container ${
								editingCity ? 'open' : ''
							}`}
						>
							<input
								type="text"
								onChange={(e) => setNewId(e.target.value)}
							/>
							<button onClick={() => updateYoutubeId(city.id)}>
								Update
							</button>
							<RemoveCity
								id={city.id}
								dataCity={dataCity}
								setDataCity={setDataCity}
							/>
						</div>
					</div>
				))}
			</div>
		</>
	);
};

export default UpdateCity;
