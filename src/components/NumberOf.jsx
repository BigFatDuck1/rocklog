import { NumberInput } from '@mantine/core';


const NumberOf = ({ label, value, setValue }) => {
    return (
        <NumberInput 
        size="md"
        radius="lg"
        label={label}
        value={value}
        onChange={setValue}
    />  
    )
}

export default NumberOf;