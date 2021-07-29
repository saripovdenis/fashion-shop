import React from 'react';
import { PageHeader } from '../components';

function Payment() {
  return (
    <div className="page">
      <PageHeader />

      <div className="page__content">
        <h1>Payment</h1>

        {/* <svg></svg> */}
        <span>This is a secure 128-bit SSL encrypted payment.</span>

        <form action="">
          <div className="form__block">
            <h2>Cardholder Name</h2>
            <div className="form__block__input">
              <div className="form__block__input--full">
                <div className="form__block__input__error">
                  <div className="form__block__input__error--message">Please enter valid name</div>
                </div>
                <input placeholder="Name as it appears on your card" type="text" name="" id="" />
              </div>
            </div>
          </div>
          <div className="form__block">
            <h2>Card Number</h2>
            <div className="form__block__input">
              <div className="form__block__input--full">
                <div className="form__block__input__error">
                  <div className="form__block__input__error--message">
                    Please enter valid number
                  </div>
                </div>
                <input placeholder="XXXX XXXX XXXX XXXX XXXX" type="text" name="" id="" />
              </div>
            </div>
          </div>
          <div className="form__block">
            <div className="out">
              <div>
                <h2>Expire Date</h2>
                <div className="form__block__input">
                  <div className="form__block__input--short">
                    <div className="form__block__input__error">
                      <div className="form__block__input__error--message">
                        Please enter valid date
                      </div>
                    </div>
                    <input placeholder="MM/YY" type="text" />
                  </div>
                </div>
              </div>
              <div>
                <h2>Security Code</h2>
                <div className="form__block__input">
                  <div className="form__block__input--short">
                    <div className="form__block__input__error">
                      <div className="form__block__input__error--message">
                        Please enter valid code
                      </div>
                    </div>
                    <input placeholder="XXX" type="text" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button>Pay Securely</button>
        </form>
      </div>
    </div>
  );
}

export default Payment;
