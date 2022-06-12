import {
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  VStack,
} from '@chakra-ui/react';
import { Phone } from '@phonehome/api-interfaces';
import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

/* eslint-disable-next-line */
export interface PhoneFormProps {
  phone?: Phone;
  onSubmit: (phone: Phone) => void;
}

export function PhoneForm(props: PhoneFormProps) {
  const { onSubmit } = props;
  const [formValue, setFormValue] = useState({});
  const navigate = useNavigate();

  const goBackToList = () => navigate('/phones');
  const submitForm = () => {
    onSubmit(formValue as Phone);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  const handleRamChange = (valueAsString: string, valueAsNumber: number) =>
    handleNumericInputChange(valueAsString, valueAsNumber, 'ram');

  const handleNumericInputChange = (
    valueAsString: string,
    valueAsNumber: number,
    name: string
  ) => {
    setFormValue({
      ...formValue,
      [name]: valueAsString ? valueAsString : valueAsNumber,
    });
  };

  const handlePriceChange = (valueString: string) =>
    setFormValue({
      ...formValue,
      price: Number(valueString),
    });

  return (
    <VStack as="form" gap={2}>
      <FormControl>
        <FormLabel>Name</FormLabel>
        <Input name="name" onChange={handleInputChange}></Input>
      </FormControl>
      <FormControl>
        <FormLabel>Manufacturer</FormLabel>
        <Input name="manufacturer" onChange={handleInputChange}></Input>
      </FormControl>
      <FormControl>
        <FormLabel>Processor</FormLabel>
        <Input name="processor" onChange={handleInputChange}></Input>
      </FormControl>
      <FormControl>
        <FormLabel>Ram (Gb)</FormLabel>
        <NumberInput onChange={handleRamChange} name="ram">
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </FormControl>
      <FormControl>
        <FormLabel>Screen</FormLabel>
        <Input id="screen" onChange={handleInputChange} name="screen"></Input>
      </FormControl>
      <FormControl>
        <FormLabel>Price</FormLabel>
        <NumberInput onChange={handlePriceChange} name="price">
          <NumberInputField />
        </NumberInput>
      </FormControl>
      <HStack gap={4}>
        <Button onClick={goBackToList}>Discard</Button>
        <Button onClick={submitForm} colorScheme="teal">
          Submit
        </Button>
      </HStack>
    </VStack>
  );
}

export default PhoneForm;
