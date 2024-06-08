import './App.css';
import { useState } from 'react';
import { DrinkButtons } from './components/DrinkButtons';
import { DrinkSearch } from './components/DrinkSearch';
import { DrinkChoice } from './components/DrinkChoice';
import { tea, coffee } from './utils/data';
import { TextInput } from './components/ui/TextInput';



export const App = () => {
	const greeting = 'Welcome to our cafe!';
	const [userDrink, setUserDrink] = useState();
    
	return (
		<div className="app">
			{userDrink ? (
				<DrinkChoice drink={userDrink} />
			) : (
				<>
					<h1>{greeting}</h1>
					<DrinkButtons drinkOne={tea.name} drinkTwo={coffee.name} />
				</>
			)}
		</div>
	);
};



