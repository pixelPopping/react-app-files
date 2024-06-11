import { useState } from 'react';
import { TextInput } from './ui/TextInput'; // Remove the ".jsx" extension
import { DrinkList } from './DrinkList';
import { availableDrinks } from '../utils/data';

export const DrinkSearch = ({clickFn}) => {
	const [searchField, setSearchField] = useState('test drink')

	return (
		<>
			<label>Search for drinks:</label>
			<TextInput />
			<DrinkList clickFn={clickFn} drinks={availableDrinks}/>
		</>
	);
};