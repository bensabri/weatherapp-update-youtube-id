import React from 'react';

const UpdateCity = ({ dataCity }) => {
	return (
		<>
			<div className="update-container">
				<h1>UPDATE CITIES YOUTUBE</h1>
				<select name="updcity" id="updcity">
					{dataCity.map((city, index) => (
						<option key={index} value={city.city}>
							{city.city}
						</option>
					))}
				</select>
				<button>Edit</button>
				<button>Update</button>
				<input type="text" />
				<button>Open</button>
			</div>
		</>
	);
};

export default UpdateCity;
