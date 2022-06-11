import { VStack, Spinner, Link, Button } from '@chakra-ui/react';
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
    <Spinner size="xl"></Spinner>
  ) : (
    <VStack py={5}>
      {phones.map((p) => (
        <Link key={p.id} href={`/phone/${p.id}`}>
          <PhoneItem key={p.id} phone={p}></PhoneItem>
        </Link>
      ))}
      <Button onClick={navigateToNewPhone}>New phone</Button>
    </VStack>
  );
}

export default PhoneList;
