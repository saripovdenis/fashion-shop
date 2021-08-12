import React from 'react';
import { Route } from 'react-router';

import { Cart } from './components';
import { Shipping, Billing, Payment, Success, Start } from './pages';

const App: React.FC = () => {
  return (
    <div className="app">
      <Route path="/" component={Start} exact />
      <Route path="/shipping" component={Shipping} exact />
      <Route path="/billing" component={Billing} exact />
      <Route path="/payment" component={Payment} exact />
      <Route path="/success" component={Success} exact />
      <Cart />
    </div>
  );
};

export default App;
