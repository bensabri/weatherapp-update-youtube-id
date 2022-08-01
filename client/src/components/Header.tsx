import { FC } from 'react';

export const Header: FC = () => {
	return (
		<header>
			<div className="z-40 relative px-8 py-4 flex bg-blue-300">
				<h2 className="tracking-wide hover:opacity-50 transition-opacity cursor-pointer text-xl font-bold">
					Weather Panel
				</h2>
				<div className="mx-auto">
					<p className="z-50 text-xs md:text-md flex items-center md:space-x-10">
						Add new video content to the wheater app
					</p>
				</div>
			</div>
		</header>
	);
};
