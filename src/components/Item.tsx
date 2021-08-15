import React from 'react';

import { useDispatch } from 'react-redux';

import { createAddItemAction, createRemoveItemAction } from '../redux/actions/cart';

interface ItemProps {
  img: string;
  name: string;
  price: number;
  quantity: number;
  id: number;
  color: string;
  editing: boolean;
}

const Item = ({ img, name, price, color, quantity, id, editing }: ItemProps) => {
  const dispatch = useDispatch();
  const handleAddItem = () => {
    dispatch(createAddItemAction(id));
  };
  const handleRemoveItem = () => {
    dispatch(createRemoveItemAction(id));
  };

  return (
    <div className="cart__order__item">
      <div className="cart__order__item--image">
        <img src={img} alt="item" />
      </div>
      <div className="cart__order__item__description">
        <div className="cart__order__item__description--title">
          <div>{name}</div>
          <div>${quantity * price}</div>
        </div>
        <div className="cart__order__item__description--properties">
          <div>{color}</div>
          <div>Quantity: {quantity}</div>
        </div>

        {editing && (
          <div className="cart__order__item__edit">
            <div className="cart__order__item__edit--button">
              <button onClick={handleAddItem}>+</button>
            </div>
            <div className="cart__order__item__edit--button">
              <button onClick={handleRemoveItem}>-</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Item;
