import { Center, Image, Text} from '@chakra-ui/react'

export const DrinkItem = ({ drink, onClick}) => {
  return (
    <Center gap={8} cursor={'pointer'}  onClick={() => onClick(drink)}>
      <Image src={drink.imgUrl} w={50} h={50} alt={drink.alt}/>
      <Text>{drink.name}</Text>
    </Center>
  );
};