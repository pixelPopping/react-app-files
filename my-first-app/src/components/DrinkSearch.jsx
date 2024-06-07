import {useState} from 'react';
import {TextInput} from './ui/TextInput';

export const DrinkSeacrch = () => {
    const [searchField, setSearchField] = useState('test drink');

return (
    <>

    <label>Search for drinks:</label>
    <TextInput />
    <p>{searchField}</p>
    </>
);
};