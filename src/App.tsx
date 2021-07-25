import React from 'react';

import { Cart, Info } from './components';

const App: React.FC = () => {
  return (
    <div className="app">
      <Info />
      <Cart />
    </div>
  );
};

export default App;
