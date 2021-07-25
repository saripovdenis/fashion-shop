import React from 'react';

function Payment() {
  return (
    <div className="page__content">
      <h1>Payment</h1>

      {/* <svg></svg> */}
      <span>This is a secure 128-bit SSL encrypted payment.</span>

      <form action="">
        <div className="form__block">
          <h2>Cardholder Name</h2>
          <div className="form__block__input">
            <input placeholder="Name as it appears on your card" type="text" name="" id="" />
          </div>
        </div>
        <div className="form__block">
          <h2>Card Number</h2>
          <div className="form__block__input">
            <input placeholder="XXXX XXXX XXXX XXXX XXXX" type="text" name="" id="" />
          </div>
        </div>
        <div className="form__block">
          <div className="out">
            <div>
              <h2>Expire Date</h2>
              <div className="form__block__input">
                <div className="form__block__input--short">
                  <input placeholder="MM/YY" type="text" />
                </div>
              </div>
            </div>
            <div>
              <h2>Security Code</h2>
              <div className="form__block__input">
                <div className="form__block__input--short">
                  <input placeholder="XXX" type="text" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <button>Pay Securely</button>
      </form>
    </div>
  );
}

export default Payment;
