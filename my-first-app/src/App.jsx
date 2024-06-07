
import './App.css';
import {tea, coffee} from './utils/data';
import { DrinkButtons } from './components/DrinkButtons';
import {DrinkChoice} from './components/DrinkChoice';

export const App = () => {
	const greeting = 'Welcome to our cafe!';
	{userDrink && <DrinkChoice drink ={userDrink} />}

	return (
		<div className="app">
			<h1>{greeting}</h1>
			<DrinkButtons drinkOne={tea.name} drinkTwo={coffee.name} />
			<DrinkChoice drink={userDrink} />
		</div>
	);
};



