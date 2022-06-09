import { VStack, Spinner, Link } from '@chakra-ui/react';
import { Phone } from '@phonehome/api-interfaces';
import { PhoneItem } from '@phonehome/ui/phone-item';
import { useEffect, useState } from 'react';

/* eslint-disable-next-line */
export interface FeaturesPhonePhoneListProps {}

export function PhoneList(props: FeaturesPhonePhoneListProps) {
  const [phones, setPhones] = useState<Phone[]>([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('/api/phones')
      .then((r) => r.json())
      .then((res) => {
        setPhones(res);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {isLoading ? (
        <Spinner size="xl"></Spinner>
      ) : (
        <VStack py={5}>
          {phones.map((p) => (
            <Link key={p.id} href={`/phone/${p.id}`}>
              <PhoneItem key={p.id} phone={p}></PhoneItem>
            </Link>
          ))}
        </VStack>
      )}
    </>
  );
}

export default PhoneList;
