import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  HStack,
  Image,
  Spacer,
  Spinner,
  Text,
  VStack,
} from '@chakra-ui/react';
import { Phone } from '@phonehome/api-interfaces';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

/* eslint-disable-next-line */
export interface FeaturesPhonePhoneDetailProps {}

export function PhoneDetail(props: FeaturesPhonePhoneDetailProps) {
  const [phone, setPhone] = useState<Phone>();
  const [isLoading, setLoading] = useState(false);

  const params = useParams();
  const navigate = useNavigate();

  const url = `/api/phones/${params['phoneId']}`;

  const onBackToList = () => navigate('/phones');
  const onDeletePhone = () => {
    setLoading(true);
    fetch(url, {
      method: 'delete',
    })
      .then(() => {
        setLoading(false);
        onBackToList();
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((r) => r.json())
      .then((res) => {
        setPhone(res);
        setLoading(false);
      });
  }, []);

  return isLoading ? (
    <Center pt="50">
      <Spinner size="xl" color="teal"></Spinner>
    </Center>
  ) : phone ? (
    <Flex
      p={5}
      flexDir={'column'}
      gap={6}
      width={{ base: 'full', md: '60%' }}
      mx={{ base: '0', md: 'auto' }}
    >
      <VStack>
        <Heading as="h2" size="md">
          {phone.manufacturer}
        </Heading>
        <Heading as="h1">{phone.name}</Heading>
      </VStack>
      <Image src={phone.img} boxSize="72" alt={phone.name}></Image>
      <Box bg="gray.100">
        <VStack>
          <Text>Processor</Text>
          <Text>{phone.processor}</Text>
        </VStack>
        <VStack>
          <Text>Ram (Gb)</Text>
          <Text>{phone.ram}</Text>
        </VStack>
        <VStack>
          <Text>Screen</Text>
          <Text>{phone.screen}</Text>
        </VStack>
      </Box>
      <Box bg="teal.100">
        <VStack>
          <Text>Price</Text>
          <Text fontSize="2xl">{phone.price}€</Text>
        </VStack>
      </Box>
      <Flex flexDir={'row'} gap={4} justifyContent={'center'}>
        <Button colorScheme="teal" onClick={onBackToList}>
          Back to list
        </Button>
        <Button colorScheme="red" onClick={onDeletePhone}>
          Delete phone
        </Button>
      </Flex>
    </Flex>
  ) : null;
}

export default PhoneDetail;
