import {
    Center,
    Flex,
    Heading,
    Image,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Text,
    useDisclosure,
  } from '@chakra-ui/react';

import { Button } from "./ui/Button";

export const DrinkChoice = ({drink, clickFn}) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
return (
    <Center flexDir={'column'} gap={4}>
    <Heading fontSize={'2xl'} color="gray.600">
      Your choice: {drink.name}
    </Heading>
    <Image
    src={drink.imgUrl} 
    alt={drink.alt} 
    width="100px"
    height="100px" 
    borderRadius={'2x1'}
    />
    <Text>Your drink will be ready soon</Text>
    <Flex mt={4}>
    <Button onClick={onOpen} mr={4}>
    Confirm  order
    </Button>
    <Button onClick ={() => clickFn()} variant="ghost">
    Change selection
    </Button>
    </Flex>


<Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Confirm your order</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>1x {drink.name}</Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="teal" mr={4}>
              Confirm
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Center>
  );
};