import { FC, useState } from 'react';
import { BsTrash2Fill } from 'react-icons/bs';
import { IdataCity } from '../model';
import { EditCity } from './EditCity';

export interface Props {
	dataCity: IdataCity[];
}

export const CitiesList: FC<Props> = ({ dataCity }: Props) => {
	return (
		<div className="col-span-3">
			<h2 className="uppercase text-center mb-5 text-gray-700 font-bold">
				Cities List
			</h2>
			<div className="grid grid-cols-6 border-b mb-2 pb-2 gap-3">
				<p className="col-span-2 capitalize font-semibold">country</p>
				<p className="capitalize font-semibold">city</p>
				<p className="col-span-2 capitalize font-semibold">video id</p>
				<p className="capitalize font-semibold">edit</p>
				{/* <BsTrash2Fill /> */}
			</div>
			<div className="overflow-y-scroll h-4/6">
				{dataCity.map(({ city, country, youtube_id }, i) => (
					<div key={i}>
						<div className="grid grid-cols-6 px-0 gap-3 mb-2">
							<p className="col-span-2 capitalize ">{country}</p>
							<p className="col-span-1 capitalize ">{city}</p>
							<p
								// onClick={() => handleDelete(id)}
								className="col-span-2 cursor-pointer"
							>
								{youtube_id}
							</p>
							{/* <BsTrash2Fill /> */}
							<EditCity city={city} />
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
