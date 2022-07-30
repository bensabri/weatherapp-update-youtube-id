import { FC } from 'react';

// export interface IAppProps {}

export const Header: FC = () => {
	return (
		<header>
			<div className="z-40 relative px-8 py-4 flex bg-blue-300">
				<h2 className="tracking-wide hover:opacity-50 transition-opacity cursor-pointer text-xl font-bold">
					Weather Panel
				</h2>
				<div className="mx-auto">
					<ul className="z-50 flex items-center space-x-5 md:space-x-10">
						<li>Home</li>
						<li>New City</li>
					</ul>
				</div>
			</div>
		</header>
	);
};
