import { ChakraProvider, VStack } from '@chakra-ui/react';
import { Phone } from '@phonehome/api-interfaces';
import { PhoneItem } from '@phonehome/ui/phone-item';
import { useEffect, useState } from 'react';

export const App = () => {
  const [phones, setPhones] = useState<Phone[]>([]);

  useEffect(() => {
    fetch('/api/phones')
      .then((r) => r.json())
      .then(setPhones);
  }, []);

  return (
    <ChakraProvider>
      <VStack>
        {phones.map(p => <PhoneItem key={p.id} phone={p}></PhoneItem>)}
      </VStack>
    </ChakraProvider>
  );
};

export default App;
