import { FC } from 'react';
import { dataCity } from '../data/DataCity';
import { BsTrash2Fill } from 'react-icons/bs';

export interface ICitiesListProps {
	// country: string;
	// city: string;
	// youtube_id: string;
}

export const CitiesList: FC = (props: ICitiesListProps) => {
	return (
		<div className="col-span-3">
			<h2 className="uppercase text-center mb-5 text-gray-700 font-bold">
				Cities List
			</h2>
			{dataCity.map((item, i) => (
				<div key={i} className="flex justify-between">
					<p className="capitalize font-semibold">{item.city}</p>
					<p>{item.youtube_id}</p>
					<BsTrash2Fill />
				</div>
			))}
		</div>
	);
};
