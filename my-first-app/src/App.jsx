import './App.css';
import { useState } from 'react';
import { DrinkSearch } from './components/DrinkSearch';
import { DrinkChoice } from './components/DrinkChoice';
import { Heading } from '@chakra-ui/react'




export const App = () => {
	const greeting = 'Welcome to our cafe!';
	const [userDrink, setUserDrink] = useState();
    
	return (
		<div className="app">
				{userDrink ? (
				<DrinkChoice drink={userDrink} clickFn={setUserDrink} />
			) : (
							<>
					<Heading size="2xl" mb={8} color="blue.200">
					{greeting}
					</Heading>
					<DrinkSearch clickFn={setUserDrink} />
				</>
			)}
		</div>
	);
};



