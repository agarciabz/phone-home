import { Box, Heading, Text, Image } from '@chakra-ui/react';
import { Phone } from '@phonehome/api-interfaces';

export interface UiPhoneItemProps {
  phone: Phone;
}

export function PhoneItem(props: UiPhoneItemProps) {
  const { phone } = props;
  return (
    <Box p={5} shadow="md" borderWidth="1px">
      <Image src={phone.img} boxSize="52"></Image>
      <Heading fontSize="xl">{phone.name}</Heading>
      <Text mt={4}>{phone.manufacturer}</Text>
    </Box>
  );
}

export default PhoneItem;
