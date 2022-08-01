import { FC } from 'react';
import { IdataCity } from '../model';
import { EditCity } from './EditCity';

export interface Props {
	dataCity: IdataCity[];
	handleDelete: (id: number) => void;
	youtubeId: string;
	setYoutubeId: React.Dispatch<React.SetStateAction<string>>;
}

export const CitiesList: FC<Props> = ({
	dataCity,
	handleDelete,
	youtubeId,
	setYoutubeId,
}: Props) => {
	return (
		<div className="col-span-3">
			<h2 className="uppercase text-center mb-5 text-gray-700 font-bold">
				Cities List
			</h2>
			<div className="grid grid-cols-8 border-b mb-2 pb-2 gap-2 pr-5">
				<p className="col-span-2 capitalize font-semibold">country</p>
				<p className="col-span-3 capitalize font-semibold">city</p>
				<p className="col-span-2 capitalize font-semibold">video id</p>
				<p className="col-span-1 capitalize font-semibold">edit</p>
			</div>
			<div className="overflow-y-scroll h-4/6">
				{dataCity.map(({ city, country, youtube_id, id }, i) => (
					<div key={i}>
						<div className="grid grid-cols-8 px-0 gap-2 mb-2">
							<p
								onClick={() => console.log(id)}
								className="col-span-2 capitalize "
							>
								{country}
							</p>
							<p className="col-span-3 capitalize ">{city}</p>
							<p
								title={youtube_id}
								className="col-span-2 cursor-pointer"
							>
								{youtube_id.slice(0, 5)}...
							</p>
							{/* <BsTrash2Fill /> */}
							<EditCity
								id={id}
								city={city}
								handleDelete={handleDelete}
								youtubeId={youtubeId}
								setYoutubeId={setYoutubeId}
							/>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
