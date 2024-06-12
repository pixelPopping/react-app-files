import './TextInput.css';

export const TextInput =({handleChange}) => {
return <input className="input" onChange={handleChange}></input>;
};