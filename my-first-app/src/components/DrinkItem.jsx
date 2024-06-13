import { Center, Image, Text} from '@chakra-ui/react'

export const DrinkItem = ({ drink, clickFn}) => {
  return (
    <Center gap={8} cursor={'pointer'}  clickFn={() => clickFn()}>
      <Image src={drink.imgUrl} w={50} h={50} alt={drink.alt}/>
      <Text>{drink.name}</Text>
    </Center>
  );
};