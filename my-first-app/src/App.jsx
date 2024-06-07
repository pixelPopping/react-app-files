
import './App.css';
import {tea, coffee} from './utils/data';
import { DrinkButtons } from './components/DrinkButtons';
import {DrinkChoice} from './components/DrinkChoice';

export const App = () => {
	const greeting = 'Welcome to our cafe!';
	const userDrink = undefined;

	return (
		<div className="app">
            <h1>{greeting}</h1>
			<DrinkButtons drinkOne={tea.name} drinkTwo={coffee.name} />
			{userDrink ? (<DrinkChoice drink={userDrink} />): 'Please select a drink'}
		</div>
	);
};



