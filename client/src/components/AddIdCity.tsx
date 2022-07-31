import { FC, useEffect } from 'react';
import { CitiesList } from './CitiesList';
import axios from 'axios';

interface Props {
	country: string;
	city: string;
	youtubeId: string;
	dataCity: [];
	setCountry: React.Dispatch<React.SetStateAction<string>>;
	setCity: React.Dispatch<React.SetStateAction<string>>;
	setYoutubeId: React.Dispatch<React.SetStateAction<string>>;
	setDataCity: React.Dispatch<React.SetStateAction<[{}]>>;
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
}) => {
	useEffect(() => {
		axios.get('http://localhost:5000/api/get').then((res) => {
			setDataCity(res.data);
		});
	}, []);

	const handleFormSubmit = (
		event: React.FormEvent<HTMLFormElement>
	): void => {
		event.preventDefault();
		axios.post('http://localhost:5000/api/insert', {
			country: country,
			city: city,
			youtube_id: youtubeId,
		});
		setDataCity([
			...dataCity,
			{
				country: country,
				city: city,
				youtube_id: youtubeId,
			},
		]);
	};

	const handleClearInput = () => {
		setCountry('');
		setCity('');
		setYoutubeId('');
	};

	return (
		<div className="flex justify-center items-center h-5/6">
			<div className="grid grid-cols-7 w-full h-auto mx-6 bg-white shadow-xl rounded-lg px-10 py-10">
				<div className="flex flex-col col-span-3">
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
								onClick={handleClearInput}
								className="cursor-pointer hover:-translate-y-1 transition-all text-white bg-red-500 tracking-widest font-semibold rounded-full py-2 px-5 text-base"
							>
								Clear
							</button>
							<button
								type="submit"
								className="cursor-pointer hover:-translate-y-1 transition-all text-white bg-[#0081CB] tracking-widest font-semibold rounded-full py-2 px-5 text-base"
							>
								Send
							</button>
						</div>
					</form>
				</div>
				<div className="border-r-2 col-span-1 mx-auto" />

				<CitiesList dataCity={dataCity} />
			</div>
		</div>
	);
};
