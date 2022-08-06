import { FC, useEffect, useState } from 'react';
import { CitiesList } from './CitiesList';
import axios from 'axios';
import { IdataCity } from '../model';
import { ICity as IProps } from '../model';

interface Props {
	cities: IProps['city'];
	setCities: React.Dispatch<React.SetStateAction<IProps['city']>>;
	fetchCount: number;
	setFetchCount: React.Dispatch<React.SetStateAction<number>>;
}

export const AddCity: FC<Props> = ({
	cities,
	setCities,
	fetchCount,
	setFetchCount,
}) => {
	const id: number = Math.floor(Math.random() * 100000 + 1);

	const [input, setInput] = useState({
		id: id,
		country: '',
		city: '',
		youtube_id: '',
	});

	useEffect(() => {
		axios.get('http://localhost:5000/api/get').then((res) => {
			// setDataCity(res.data);
			setCities(res.data);
		});
	}, [fetchCount]);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		setInput({
			...input,
			[e.target.name]: e.target.value,
		});
	};

	const handleFormSubmit = (
		event: React.FormEvent<HTMLFormElement>
	): void => {
		event.preventDefault();
		try {
			axios.post('http://localhost:5000/api/insert', input);
			setCities([
				...cities,
				{
					id: id,
					country: input.country,
					city: input.city,
					youtube_id: input.youtube_id,
				},
			]);
			setFetchCount((prev) => prev + 1);
			// setCities([
			// 	...cities,
			// 	{
			// 		id: 0,
			// 		country: '',
			// 		city: '',
			// 		youtube_id: '',
			// 	},
			// ]);
		} catch (error) {
			console.log(error);
		}
	};

	//delete function
	const handleDelete = (id: number) => {
		axios
			.delete(`http://localhost:5000/api/delete/${id}`)
			.then(() => {
				setFetchCount((prev) => prev + 1);
			})
			.catch(() => console.log('error'));
	};

	return (
		<div className="flex justify-center items-center md:h-5/6">
			<div className="md:grid grid-cols-7 space-y-5 md:space-y-0 w-full h-3/4 overflow-hidden md:mx-6 bg-white shadow-xl rounded-lg px-10 py-10">
				<div className=" flex flex-col col-span-3">
					<h2 className="uppercase text-center mb-5 text-gray-700 font-bold">
						add new video
					</h2>
					<form onSubmit={handleFormSubmit}>
						<div className="flex flex-col mb-5">
							<label
								htmlFor="country"
								className="mb-1 text-xs sm:text-sm tracking-wide text-gray-700"
							>
								Country:
							</label>
							<input
								className="py-1 text-black text-lg font-normal rounded pl-2 border-2 focus:outline-none focus:border-green-400 focus:ring-green-500"
								id="country"
								name="country"
								type="text"
								placeholder="ex: France"
								value={input.country}
								onChange={handleChange}
								required
							/>
						</div>
						<div className="flex flex-col mb-6">
							<label
								htmlFor="city"
								className="mb-1 text-xs sm:text-sm tracking-wide text-gray-700"
							>
								City:
							</label>
							<input
								className="py-1 text-black text-lg font-normal rounded pl-2 border-2 focus:outline-none focus:border-green-400 focus:ring-green-500"
								id="city"
								name="city"
								type="text"
								placeholder="ex: Paris"
								value={input.city}
								onChange={handleChange}
								required
							/>
						</div>
						<div className="flex flex-col mb-6">
							<label
								htmlFor="youtube_id"
								className="mb-1 text-xs sm:text-sm tracking-wide text-gray-700"
							>
								Id Youtube video:
							</label>
							<input
								className="py-1 text-black text-lg font-normal rounded pl-2 border-2 focus:outline-none focus:border-green-400 focus:ring-green-500"
								id="youtube_id"
								name="youtube_id"
								type="text"
								placeholder="ex: 5v4dd5g4f"
								value={input.youtube_id}
								onChange={handleChange}
								required
							/>
						</div>

						<div className="w-full flex justify-around ">
							<button
								type="submit"
								className="drop-shadow-xl cursor-pointer hover:-translate-y-1 focus:scale-90 transition-transform text-white bg-[#0081CB] tracking-widest font-semibold rounded-full py-2 px-5 text-base"
							>
								Send
							</button>
						</div>
					</form>
				</div>
				<div className="border-y md:border-x col-span-1 mx-auto h-5/6" />

				<CitiesList
					cities={cities}
					handleDelete={handleDelete}
					setFetchCount={setFetchCount}
				/>
			</div>
		</div>
	);
};
