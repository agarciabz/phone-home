import { Box, Heading, Text, Image, VStack } from '@chakra-ui/react';
import { Phone } from '@phonehome/api-interfaces';

export interface PhoneItemProps {
  phone: Phone;
}

export function PhoneItem(props: PhoneItemProps) {
  const { phone } = props;
  const placeholder = 'assets/smartphone_placeholder.png';
  return (
    <Box p={5} shadow="md" borderWidth="1px">
      <Image
        src={phone.img || placeholder}
        boxSize="52"
        objectFit="contain"
        pb={2}
      ></Image>
      <VStack spacing={1}>
        <Heading color="teal" fontSize="xl">
          {phone.name}
        </Heading>
        <Text mt={4}>{phone.manufacturer}</Text>
      </VStack>
    </Box>
  );
}

export default PhoneItem;
