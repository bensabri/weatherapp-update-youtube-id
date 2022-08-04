import { FC } from 'react';
import { EditCity } from './EditCity';
import { ICity as IProps } from '../model';

interface Props {
	cities: IProps['city'];
	handleDelete: (id: number) => void;
	setFetchCount: React.Dispatch<React.SetStateAction<number>>;
}

export const CitiesList: FC<Props> = ({
	cities,
	handleDelete,
	setFetchCount,
}: Props) => {
	// console.log(cities);
	return (
		<div className="col-span-3 ">
			<h2 className="uppercase text-center mb-5 text-gray-700 font-bold">
				Cities List
			</h2>
			<div className="grid grid-cols-8 border-b mb-1 pb-2 gap-2 pr-5">
				<p className="col-span-2 capitalize font-lg">country</p>
				<p className="col-span-3 capitalize font-lg">city</p>
				<p className="col-span-2 capitalize font-lg">video id</p>
				<p className="col-span-1 capitalize font-lg">edit</p>
			</div>
			{cities ? (
				<div className="overflow-y-scroll h-60 md:h-3/6">
					{cities.map(({ city, country, youtube_id, id }, i) => (
						<div key={i}>
							<div className="grid grid-cols-8 px-0 gap-2 mb-2">
								<p className="col-span-2 capitalize font-thin">
									{country}
								</p>
								<p className="col-span-3 capitalize font-thin">
									{city}
								</p>
								<p
									title={youtube_id}
									className="col-span-2 cursor-pointer font-thin"
								>
									{youtube_id.slice(0, 5)}...
								</p>
								<EditCity
									id={id}
									city={city}
									handleDelete={handleDelete}
									setFetchCount={setFetchCount}
								/>
							</div>
						</div>
					))}
				</div>
			) : (
				<div className="text-center">
					<p>Une erreur est survenue</p>
				</div>
			)}
		</div>
	);
};
