import * as React from 'react';

interface Props {
	country: string;
	city: string;
	youtubeId: string;
	dataCity: [];
	setCountry: React.Dispatch<React.SetStateAction<string>>;
	setCity: React.Dispatch<React.SetStateAction<string>>;
	setYoutubeId: React.Dispatch<React.SetStateAction<string>>;
	setDataCity: React.Dispatch<React.SetStateAction<[]>>;
}

export const AddCity = ({ city }: Props) => {
	return <div>{city}</div>;
};
