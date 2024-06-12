import { Center} from '@chakra-ui/react'

export const DrinkItem = ({ drink, clickFn }) => {
  return (
    <Center bg="drink-item" h="100px" color="purple" onClick={() => clickFn(drink)}>
      <Image src={drink.imgUrl} width={50} height={50} alt={drink.alt}/>
      <Text>{drink.name}</Text>
    </Center>
  );
};