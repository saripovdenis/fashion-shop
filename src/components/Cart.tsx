import React from 'react';
import { useSelector } from 'react-redux';

import Item from './Item';

import { RootState, CartObject } from '../types';

function Cart() {
  const { items, subtotal, shipping, taxes, total } = useSelector(({ cart }: RootState) => cart);
  return (
    <div className="cart">
      <div className="title">
        <h2>Order Summary</h2>
        <button>edit order</button>
      </div>

      <div className="cart__order">
        {items.map((obj: CartObject) => {
          return (
            <Item
              name={obj.name}
              img={obj.img}
              price={obj.price}
              color={obj.color}
              quantity={obj.quantity}
            />
          );
        })}
      </div>

      <div className="cart__summary">
        <div className="cart__summary__cost">
          <div className="cart__summary__cost--item">
            <div>Subtotal</div>
            <div>${subtotal}</div>
          </div>
          <div className="cart__summary__cost--item">
            <div>Shipping</div>
            <div>{shipping ? shipping : 'Free'}</div>
          </div>
          <div className="cart__summary__cost--item">
            <div>Taxes</div>
            <div>${taxes}</div>
          </div>
        </div>

        <div className="cart__summary--total">
          <div>Total</div>
          <div>${total}</div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
