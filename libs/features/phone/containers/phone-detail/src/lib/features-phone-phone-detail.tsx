import {
  Box,
  Button,
  Center,
  Flex,
  Grid,
  Heading,
  Image,
  SimpleGrid,
  Spacer,
  Spinner,
  Text,
  useMediaQuery,
  VStack,
} from '@chakra-ui/react';
import { Phone } from '@phonehome/api-interfaces';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export function PhoneDetail() {
  const [phone, setPhone] = useState<Phone>();
  const [isLoading, setLoading] = useState(false);
  const [isLargerThan1280] = useMediaQuery('(min-width: 1280px)');

  const params = useParams();
  const navigate = useNavigate();

  const url = `/api/phones/${params['phoneId']}`;
  const placeholder = 'assets/smartphone_placeholder.png';

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
      gap={4}
      alignItems="center"
      width={{ base: 'full', md: '60%' }}
      mx={{ base: '0', md: 'auto' }}
    >
      <VStack>
        <Heading as="h2" size="md">
          {phone.manufacturer}
        </Heading>
        <Heading color="teal" as="h1">
          {phone.name}
        </Heading>
      </VStack>
      <SimpleGrid columns={isLargerThan1280 ? 2 : 1} gap={6}>
        <Image
          src={phone.img || placeholder}
          boxSize="72"
          objectFit="contain"
          alt={phone.name}
        ></Image>
        <Flex flexDir="column" gap={2}>
          <Flex flexDir="column" gap="2">
            <VStack align="left" spacing={-1}>
              <Text color="gray" textTransform="uppercase">
                Processor
              </Text>
              <Text>{phone.processor}</Text>
            </VStack>
            <VStack align="left" spacing={-1}>
              <Text color="gray" textTransform="uppercase">
                Ram (Gb)
              </Text>
              <Text>{phone.ram}</Text>
            </VStack>
            <VStack align="left" spacing={-1}>
              <Text color="gray" textTransform="uppercase">
                Screen
              </Text>
              <Text>{phone.screen}</Text>
            </VStack>
          </Flex>
          <Spacer></Spacer>
          <Box
            p={2}
            borderWidth="thin"
            borderColor={'gray.200'}
            borderRadius="lg"
          >
            <VStack align="start" spacing={-1}>
              <Text color="gray" textTransform="uppercase">
                Price
              </Text>
              <Text color="teal" fontSize="6xl">
                {phone.price}€
              </Text>
            </VStack>
          </Box>
        </Flex>
      </SimpleGrid>
      <Flex flexDir={'row'} gap={4} justifyContent={'center'}>
        <Button onClick={onBackToList}>Back to list</Button>
        <Button colorScheme="red" onClick={onDeletePhone}>
          Delete phone
        </Button>
      </Flex>
    </Flex>
  ) : null;
}

export default PhoneDetail;
