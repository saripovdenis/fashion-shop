import React from 'react';

import { Cart } from './components';
import { Shipping, Billing, Payment } from './pages';

const App: React.FC = () => {
  return (
    <div className="app">
      <Shipping />
      <Cart />
    </div>
  );
};

export default App;
