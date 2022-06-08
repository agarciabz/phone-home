import { ChakraProvider } from '@chakra-ui/react';
import { Phone } from '@phonehome/api-interfaces';
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
      <ul>
        {phones.map(p => <li key={p.id}>{p.name}</li>)}
      </ul>
    </ChakraProvider>
  );
};

export default App;
