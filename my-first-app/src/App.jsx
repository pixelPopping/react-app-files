import './App.css';
import { useState } from 'react';
import { DrinkButtons } from './components/DrinkButtons';
import { DrinkSearch } from './components/DrinkSearch';
import { DrinkChoice } from './components/DrinkChoice';
import { tea, coffee } from './utils/data';


export const TextInput =() => <input className="text-input"></input>

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
					<DrinkSearch availebleDrinks ={availebleDrinks}/>
					<DrinkButtons drinkOne={tea.name} drinkTwo={coffee.name} />
				</>
			)}
		</div>
	);
};



