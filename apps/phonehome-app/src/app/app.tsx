import { ChakraProvider, Spinner, VStack } from '@chakra-ui/react';
import { Phone } from '@phonehome/api-interfaces';
import { PhoneItem } from '@phonehome/ui/phone-item';
import { useEffect, useState } from 'react';

export const App = () => {
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
    <ChakraProvider>
      {isLoading ? (
        <Spinner size="xl"></Spinner>
      ) : (
        <VStack py={5}>
          {phones.map((p) => (
            <PhoneItem key={p.id} phone={p}></PhoneItem>
          ))}
        </VStack>
      )}
    </ChakraProvider>
  );
};

export default App;
