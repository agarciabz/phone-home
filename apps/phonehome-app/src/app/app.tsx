import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';

import { PhoneList } from '@phonehome/features/phone/phone-list';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<PhoneList />}></Route>
      <Route path="/phones" element={<PhoneList />}></Route>
      <Route path="*" element={<Navigate to="/list" replace />}></Route>
    </Routes>
  );
};

export default App;
