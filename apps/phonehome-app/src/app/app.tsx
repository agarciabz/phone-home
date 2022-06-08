import { Phone } from '@phonehome/api-interfaces';
import React, { useEffect, useState } from 'react';

export const App = () => {
  const [phones, setPhones] = useState<Phone[]>([]);

  useEffect(() => {
    fetch('/api/phones')
      .then((r) => r.json())
      .then(setPhones);
  }, []);

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h1>Welcome to phonehome-app!</h1>
        <img
          width="450"
          src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png"
          alt="Nx - Smart, Fast and Extensible Build System"
        />
      </div>
      <ul>
        {phones.map(p => <li key={p.id}>{p.name}</li>)}
      </ul>
    </>
  );
};

export default App;
