import { Box, Heading, Text } from '@chakra-ui/react';
import { Phone } from '@phonehome/api-interfaces';

export interface UiPhoneItemProps {
  phone: Phone;
}

export function PhoneItem(props: UiPhoneItemProps) {
  const { phone } = props;
  return (
    <Box p={5} shadow='md' borderWidth='1px'>
      <Heading fontSize='xl'>{phone.manufacturer}</Heading>
      <Text mt={4}>{phone.name}</Text>
    </Box>
  );
}

export default PhoneItem;
