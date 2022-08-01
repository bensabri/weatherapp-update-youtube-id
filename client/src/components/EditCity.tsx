import { FC, useState } from 'react';
import { Modal } from '@mantine/core';
import { GoPencil } from 'react-icons/go';
import axios from 'axios';

export interface IEditCityProps {
	city: string;
}

export const EditCity: FC<IEditCityProps> = ({ city }: IEditCityProps) => {
	const [opened, setOpened] = useState<boolean>(false);

	const handleDelete: Function = (id: number): void => {
		axios.delete(`http://localhost:5000/api/delete/${id}`);
	};

	return (
		<div className="col-span-1">
			<Modal opened={opened} onClose={() => setOpened(false)}>
				<h2 className="text-center text-xl">{`Edit City ${city}`}</h2>
				<div className="mx-10 mt-16">
					<form>
						<div className="flex flex-col mb-5">
							<label
								htmlFor="city"
								className="mb-1 text-xs sm:text-sm tracking-wide text-gray-800"
							>
								City:
							</label>
							<input
								className="py-1 text-gray-800 text-lg font-normal rounded pl-2 border-2 focus:outline-none focus:border-green-400 focus:ring-green-500"
								id="city"
								name="city"
								type="text"
								defaultValue={city}
								placeholder="enter city"
								required
							/>
						</div>
						<div className="flex flex-col mb-5">
							<label
								htmlFor="video_id"
								className="mb-1 text-xs sm:text-sm tracking-wide text-gray-800"
							>
								Video id:
							</label>
							<input
								className="py-1 text-gray-800 text-lg font-normal rounded pl-2 border-2 focus:outline-none focus:border-green-400 focus:ring-green-500"
								id="video_id"
								name="video_id"
								type="text"
								placeholder="enter video id"
								required
							/>
						</div>
					</form>
					<div className="w-full flex justify-center ">
						<button
							className="hover:-translate-y-1 transition-all text-white bg-[#FF4D5A] tracking-widest font-semibold rounded-full py-2 px-5 text-base"
							onClick={() => {
								// handleDelete(id);
								setOpened(false);
							}}
						>
							Delete
						</button>
					</div>
				</div>
			</Modal>
			<div className="cursor-pointer" onClick={() => setOpened(true)}>
				<GoPencil />
			</div>
		</div>
	);
};
