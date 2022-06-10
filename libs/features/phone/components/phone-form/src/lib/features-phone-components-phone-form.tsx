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
import styles from './features-phone-components-phone-form.module.css';

/* eslint-disable-next-line */
export interface FeaturesPhoneComponentsPhoneFormProps {}

export function PhoneForm(props: FeaturesPhoneComponentsPhoneFormProps) {
  return (
    <VStack as="form">
      <FormControl>
        <FormLabel>Name</FormLabel>
        <Input id="name"></Input>
      </FormControl>
      <FormControl>
        <FormLabel>Manufacturer</FormLabel>
        <Input id="manufacturer"></Input>
      </FormControl>
      <FormControl>
        <FormLabel>Processor</FormLabel>
        <Input id="processor"></Input>
      </FormControl>
      <FormControl>
        <FormLabel>Ram (Gb)</FormLabel>
        <NumberInput>
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </FormControl>
      <FormControl>
        <FormLabel>Screen</FormLabel>
        <Input id="screen"></Input>
      </FormControl>
      <FormControl>
        <FormLabel>Price</FormLabel>
        <NumberInput>
          <NumberInputField />
        </NumberInput>
      </FormControl>
      <HStack>
        <Button>Discard</Button>
        <Button>Submit</Button>
      </HStack>
    </VStack>
  );
}

export default PhoneForm;
