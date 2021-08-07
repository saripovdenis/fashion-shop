import React from 'react';

import { useSelector } from 'react-redux';

import { RootState } from '../types';

function Success() {
  const { email } = useSelector(({ info }: RootState) => info.billing);

  return (
    <div className="page">
      <div className="page__content">
        <h1>Thank you for your order!</h1>
        <br />
        <div>Your order number is: 1888787788</div>
        <div>Your will recieve an email confirmation shortly to {email}</div>
        <br />
        <div>Estimated elivery Day is</div>
        <div>Friday 1st April 2016</div>
        <br />
        <div>Print Recipe</div>
      </div>
    </div>
  );
}

export default Success;
