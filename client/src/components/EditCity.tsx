import { FC, useState } from 'react';
import { Modal } from '@mantine/core';
import { GoPencil } from 'react-icons/go';
import axios from 'axios';

export interface Props {
	id: number;
	city: string;
	handleDelete: (id: number) => void;
	setFetchCount: React.Dispatch<React.SetStateAction<number>>;
}

export const EditCity: FC<Props> = ({
	city,
	id,
	handleDelete,
	setFetchCount,
}: Props) => {
	const [opened, setOpened] = useState<boolean>(false);
	const [newYoutubeId, setNewYoutubeId] = useState<string>('');

	const handleUpdate = (id: number) => {
		if (newYoutubeId) {
			axios.put('http://localhost:5000/api/update', {
				id: id,
				youtube_id: newYoutubeId,
			});
			setFetchCount((prev) => prev + 1);
			setOpened(false);
			console.log({
				id: id,
				youtube_id: newYoutubeId,
			});
		} else return alert("Vous n'avez pas entrée de valeur");
	};

	return (
		<div className="col-span-1">
			<Modal
				classNames={{
					modal: 'rounded-lg',
				}}
				opened={opened}
				onClose={() => setOpened(false)}
			>
				<h2 className="text-center text-xl">{`Edit City ${city}`}</h2>
				<div className="mx-10">
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
								disabled
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
								value={newYoutubeId}
								onChange={(
									event: React.ChangeEvent<HTMLInputElement>
								) => setNewYoutubeId(event.target.value)}
								required
							/>
						</div>
					</form>
					<div className="w-full flex justify-around ">
						<button
							onClick={() => {
								handleUpdate(id);
							}}
							className="cursor-pointer focus:scale-90 hover:-translate-y-1 transition-transform text-white bg-green-500 tracking-widest font-semibold rounded-full py-2 px-5 text-base"
						>
							Update
						</button>
						<button
							className="hover:-translate-y-1 focus:scale-90 transition-transform text-white bg-[#FF4D5A] tracking-widest font-semibold rounded-full py-2 px-5 text-base"
							onClick={() => {
								setOpened(false);
								handleDelete(id);
							}}
						>
							Delete
						</button>
					</div>
				</div>
			</Modal>
			<div className=" cursor-pointer" onClick={() => setOpened(true)}>
				<GoPencil />
			</div>
		</div>
	);
};
