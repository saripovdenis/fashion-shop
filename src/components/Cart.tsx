import React from 'react';

function Cart() {
  return (
    <div className="cart">
      <div className="title">
        <h2>Order Summary</h2>
        <button>edit order</button>
      </div>

      <div className="cart__order">
        <div className="cart__order__item">
          <div className="cart__order__item--image">image</div>
          <div className="cart__order__item__description">
            <div className="cart__order__item__description--title">
              <div>The Chelsea Boot</div>
              <div>$235</div>
            </div>
            <div className="cart__order__item__description--properties">
              <div>Black</div>
              <div>Quantity: 1</div>
            </div>
          </div>
        </div>

        <div className="cart__order__item">
          <div className="cart__order__item--image">image</div>
          <div className="cart__order__item__description">
            <div className="cart__order__item__description--title">
              <div>The Chelsea Boot</div>
              <div>$235</div>
            </div>
            <div className="cart__order__item__description--properties">
              <div>Black</div>
              <div>Quantity: 1</div>
            </div>
          </div>
        </div>

        <div className="cart__order__item">
          <div className="cart__order__item--image">image</div>
          <div className="cart__order__item__description">
            <div className="cart__order__item__description--title">
              <div>The Chelsea Boot</div>
              <div>$235</div>
            </div>
            <div className="cart__order__item__description--properties">
              <div>Black</div>
              <div>Quantity: 1</div>
            </div>
          </div>
        </div>
      </div>

      <div className="cart__summary">
        <div className="cart__summary__cost">
          <div className="cart__summary__cost--item">
            <div>Subtotal</div>
            <div>$398</div>
          </div>
          <div className="cart__summary__cost--item">
            <div>Shipping</div>
            <div>Free</div>
          </div>
          <div className="cart__summary__cost--item">
            <div>Taxes</div>
            <div>$12.12</div>
          </div>
        </div>

        <div className="cart__summary--total">
          <div>Total</div>
          <div>$410.12</div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
