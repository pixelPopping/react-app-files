import { useState } from 'react';
import { TextInput } from './ui/TextInput'; // Remove the ".jsx" extension
import { DrinkList } from './DrinkList';
import { availableDrinks } from '../utils/data';

export const DrinkSearch = ({clickfn}) => {
	const [searchField, setSearchField] = useState('');
   
	const matchedDrinks = availableDrinks.filter((drink) => {
	return drink.name.toLowerCase().includes(searchField.toLowerCase());
	});

	const handleChange = (event) => {
		setSearchField(event.target.value);
	};
 return(
		<>
			<label>Search for drinks:</label>
			<TextInput changeFn={handleChange} w={200} mb={8}/>
			<DrinkList clickfn= {clickfn} drinks={matchedDrinks}/>

		</>
	);
};

