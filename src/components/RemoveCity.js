import React from 'react';
import axios from 'axios';

const RemoveCity = ({ id, setDataCity, dataCity }) => {
	const deleteCity = () => {
		axios.delete(`http://localhost:5000/delete/${id}`).then(() => {
			setDataCity(dataCity.filter((city) => city.id !== id));
		});
	};

	return (
		<>
			<button onClick={deleteCity}>Remove</button>
		</>
	);
};

export default RemoveCity;
