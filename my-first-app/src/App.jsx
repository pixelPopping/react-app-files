
import './App.css';
import {coffee, tea} from './untils/data';
import { DrinkButtons } from './components/DrinkButtons';
import {DrinkChoice} from './utils/data';

export const App = () => {
	const greeting = 'Welcome to our cafe!';
	const userDrink = tea;

	return (
		<div className="app">
			<h1>{greeting}</h1>
			<DrinkButtons drinkOne={tea.name} drinkTwo={coffee.name} />
			<DrinkChoice drink={userDrink} />
		</div>
	);
};



