import React from 'react';
import axios from 'axios';

const AddCity = ({
	setYoutubeId,
	setCity,
	setCountry,
	country,
	city,
	youtubeId,
}) => {
	const addCity = () => {
		axios
			.post('http://localhost:5000/create', {
				country: country,
				city: city,
				youtubeId: youtubeId,
			})
			.then((res) => {
				console.log('Success');
			});
	};

	return (
		<>
			<div className="add-container">
				<h1>ADD CITIES YOUTUBE</h1>
				<label>Country:</label>
				<input
					onChange={(e) => setCountry(e.target.value)}
					type="text"
				/>
				<label>City:</label>
				<input onChange={(e) => setCity(e.target.value)} type="text" />
				<label>Youtube Id:</label>
				<input
					onChange={(e) => setYoutubeId(e.target.value)}
					type="text"
				/>
				<button onClick={addCity}>Add City</button>
			</div>
		</>
	);
};

export default AddCity;
