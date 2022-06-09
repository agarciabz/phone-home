import { Route, Routes, Navigate } from 'react-router-dom';

import { PhoneList } from '@phonehome/features/phone/phone-list';
import { PhoneDetail } from '@phonehome/features/phone/phone-detail';

export const App = () => {
  return (
    <Routes>
      <Route path="/list" element={<PhoneList />}></Route>
      <Route path="/phone">
        <Route path=":phoneId" element={<PhoneDetail />}></Route>
      </Route>
      <Route path="*" element={<Navigate to="/list" replace />}></Route>
    </Routes>
  );
};

export default App;
