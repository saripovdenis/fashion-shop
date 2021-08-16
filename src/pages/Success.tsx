import React from 'react';

import { useSelector } from 'react-redux';

import { RootState } from '../types';

function Success() {
  const { email } = useSelector(({ info }: RootState) => info.billing);
  const { submited } = useSelector(({ info }: RootState) => info.payment);

  return (
    <div className="page">
      <div className="page__content">
        {!submited ? (
          'Заполните предыдущие страницы, чтобы продолжить'
        ) : (
          <div>
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
        )}
      </div>
    </div>
  );
}

export default Success;
