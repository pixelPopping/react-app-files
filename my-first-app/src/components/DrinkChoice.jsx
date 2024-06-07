import { useState } from "react";

export const DrinkChoice = ({drink}) => {
const [userDrink, setUserDrink] = useState();
return (
    <>
    <h2>Your choice: {drink.name}</h2>
    <img src={drink.imgUrl} alt={drink.alt} width="100px"
    height="100px" />
    <p>Your drink will be ready soon</p>
    </>
);
};