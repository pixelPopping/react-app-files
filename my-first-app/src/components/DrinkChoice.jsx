
export const DrinkChoice = ({drink}) => {
return (
    <>
    <img src={drink.imgUrl} alt={drink.alt} width="100px"
    height="100px" />
    <p>Your drink will be ready soon</p>
    </>
);
};