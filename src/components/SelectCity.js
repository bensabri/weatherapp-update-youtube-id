import React from 'react';

const SelectCity = ({
	setCurrentCity,
	dataCity,
	setEditingCity,
	editingCity,
}) => {
	return (
		<div>
			<h1>SELECT CITY</h1>
			<select
				name="updcity"
				id="updcity"
				onChange={(e) => setCurrentCity(e.target.value)}
			>
				<option value=""></option>
				{dataCity.map((city, index) => (
					<option key={index} value={city.city}>
						{city.city}
					</option>
				))}
			</select>
			<button onClick={() => setEditingCity(!editingCity)}>Edit</button>
		</div>
	);
};

export default SelectCity;
