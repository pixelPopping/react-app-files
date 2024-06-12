import './TextInput.css';
import { Input } from '@chakra-ui/react'

export const TextInput =({changeFn}) => {
return <Input placeholder=''  onChange={changeFn}></Input>;
};