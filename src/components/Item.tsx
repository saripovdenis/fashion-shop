import React from 'react';

interface ItemProps {
  name: string;
  img: string;
  price: number;
  color: string;
  quantity: number;
}

const Item = ({ img, name, price, color, quantity }: ItemProps) => {
  return (
    <div className="cart__order__item">
      <div className="cart__order__item--image">image</div>
      <div className="cart__order__item__description">
        <div className="cart__order__item__description--title">
          <div>{name}</div>
          <div>${price}</div>
        </div>
        <div className="cart__order__item__description--properties">
          <div>{color}</div>
          <div>Quantity: {quantity}</div>
        </div>
        <div className="cart__order__item__edit">
          <div className="cart__order__item__edit--button">
            <button>+</button>
          </div>
          <div className="cart__order__item__edit--button">
            <button>-</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
