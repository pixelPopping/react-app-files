import { useState } from 'react';
import { TextInput } from './ui/TextInput'; // Remove the ".jsx" extension
import { DrinkList } from './DrinkList';
import { availableDrinks } from '../utils/data';

export const DrinkSearch = ({clickFn}) => {
	const [searchField, setSearchField] = useState("");
    const handleChange = (event) => setSearchField(event.target.value);
	const matchedDrinks = availableDrinks.filter((drink) => {
	return drink.name.toLowerCase().includes(searchField.toLowerCase());
	});
	return (
		<>
			<label>Search for drinks:</label>
			<TextInput />
			<input type="text" value={searchField} onKeyDown={handleChange}/>
			<DrinkList clickFn={clickFn} drinks={matchedDrinks}/>

		</>
	);
};

