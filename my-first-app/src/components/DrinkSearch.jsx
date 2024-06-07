import { useState } from 'react';
import { Textinput } from './ui/Textinput';

export const DrinkSearch = () => {
	const [searchField, setSearchField] = useState('test drink');

	return (
		<>
			<label>Search for drinks:</label>
			<Textinput />
			<p>{searchField}</p>
		</>
	);
};