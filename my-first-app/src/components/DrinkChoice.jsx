
export const DrinkChoice = ({drink}) => {
return (
    <>
    {userDrink && <DrinkChoice drink={userDrink} />}
    <img src={drink.imgUrl} alt={drink.alt} width="100px"
    height="100px" />
    <p>Your drink will be ready soon</p>
    </>
);
};