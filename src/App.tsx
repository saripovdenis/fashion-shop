import React from 'react';
import { Route } from 'react-router';

import { Cart } from './components';
import { Shipping, Billing, Payment } from './pages';

const App: React.FC = () => {
  return (
    <div className="app">
      <Route path="/shipping" component={Shipping} exact />
      <Route path="/billing" component={Billing} exact />
      <Route path="/payment" component={Payment} exact />
      <Cart />
    </div>
  );
};

export default App;
