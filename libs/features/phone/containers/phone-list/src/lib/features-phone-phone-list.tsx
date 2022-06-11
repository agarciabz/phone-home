import {
  VStack,
  Spinner,
  Link,
  Button,
  Heading,
  Flex,
  Center,
} from '@chakra-ui/react';
import { Phone } from '@phonehome/api-interfaces';
import { PhoneItem } from '@phonehome/ui/phone-item';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

/* eslint-disable-next-line */
export interface FeaturesPhonePhoneListProps {}

export function PhoneList(props: FeaturesPhonePhoneListProps) {
  const [phones, setPhones] = useState<Phone[]>([]);
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();

  const navigateToNewPhone = () => navigate('/phone/new');

  useEffect(() => {
    setLoading(true);
    fetch('/api/phones')
      .then((r) => r.json())
      .then((res) => {
        const phones = res.map((phone: any) => ({
          ...phone,
          id: phone._id,
        }));
        setPhones(phones);
        setLoading(false);
      });
  }, []);

  return isLoading ? (
    <Center pt="40">
      <Spinner size="xl" color="teal"></Spinner>
    </Center>
  ) : (
    <VStack py={5}>
      <Heading>The Phone Home</Heading>
      <Button onClick={navigateToNewPhone} colorScheme="teal">
        New phone
      </Button>
      <VStack>
        {phones.map((p) => (
          <Link key={p.id} href={`/phone/${p.id}`}>
            <PhoneItem key={p.id} phone={p}></PhoneItem>
          </Link>
        ))}
      </VStack>
    </VStack>
  );
}

export default PhoneList;
