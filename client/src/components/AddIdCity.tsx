import { FC, useEffect } from 'react';
import { CitiesList } from './CitiesList';
import axios from 'axios';
import { IdataCity } from '../model';

interface Props {
	country: string;
	city: string;
	youtubeId: string;
	dataCity: IdataCity[];
	setCountry: React.Dispatch<React.SetStateAction<string>>;
	setCity: React.Dispatch<React.SetStateAction<string>>;
	setYoutubeId: React.Dispatch<React.SetStateAction<string>>;
	setDataCity: React.Dispatch<React.SetStateAction<IdataCity[]>>;
	fetchCount: number;
	setFetchCount: React.Dispatch<React.SetStateAction<number>>;
}

export const AddIdCity: FC<Props> = ({
	setCountry,
	setCity,
	setYoutubeId,
	country,
	city,
	youtubeId,
	dataCity,
	setDataCity,
	fetchCount,
	setFetchCount,
}) => {
	useEffect(() => {
		axios.get('http://localhost:5000/api/get').then((res) => {
			setDataCity(res.data);
		});
	}, [fetchCount]);

	const id: number = Math.floor(Math.random() * 100000 + 1);

	const handleFormSubmit = (
		event: React.FormEvent<HTMLFormElement>
	): void => {
		event.preventDefault();
		try {
			axios.post('http://localhost:5000/api/insert', {
				id: id,
				country: country,
				city: city,
				youtube_id: youtubeId,
			});
			setDataCity([
				...dataCity,
				{
					id: id,
					country: country,
					city: city,
					youtube_id: youtubeId,
				},
			]);
			setCountry('');
			setCity('');
			setYoutubeId('');
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
		<div className="flex justify-center items-center h-5/6">
			<div className="md:grid grid-cols-7 space-y-5 md:space-y-0 w-full h-auto md:mx-6 bg-white shadow-xl rounded-lg px-10 py-10">
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
								value={country}
								onChange={(
									event: React.ChangeEvent<HTMLInputElement>
								) => setCountry(event.target.value)}
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
								value={city}
								onChange={(
									event: React.ChangeEvent<HTMLInputElement>
								) => setCity(event.target.value)}
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
								value={youtubeId}
								onChange={(
									event: React.ChangeEvent<HTMLInputElement>
								) => setYoutubeId(event.target.value)}
								required
							/>
						</div>

						<div className="w-full flex justify-around ">
							<button
								type="submit"
								className="drop-shadow-xl cursor-pointer focus:scale-90 hover:-translate-y-1 transition-all text-white bg-[#0081CB] tracking-widest font-semibold rounded-full py-2 px-5 text-base"
							>
								Send
							</button>
						</div>
					</form>
				</div>
				<div className="border-y md:border-x col-span-1 mx-auto" />

				<CitiesList
					dataCity={dataCity}
					handleDelete={handleDelete}
					setFetchCount={setFetchCount}
				/>
			</div>
		</div>
	);
};
