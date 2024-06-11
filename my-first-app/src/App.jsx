import './App.css';
import { useState } from 'react';
import { DrinkSearch } from './components/DrinkSearch';
import { DrinkChoice } from './components/DrinkChoice';
import { Button } from './components/ui/Button';



export const App = () => {
	const greeting = 'Welcome to our cafe!';
	const [userDrink, setUserDrink] = useState();
    
	return (
		<div className="app">
							<>
					<h1>{greeting}</h1>
					<DrinkButtons drinkOne={tea.name} drinkTwo={coffee.name} />
				</>
			
		</div>
	);
};



