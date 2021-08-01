import React from 'react';
import { PageHeader } from '../components';

function Shipping() {
  return (
    <div className="page">
      <PageHeader />

      <div className="page__content">
        <h1>Shipping Info</h1>

        <form>
          <div className="form__block">
            <h2>Recipient</h2>
            <div className="form__block__input">
              <div className="form__block__input--full">
                <div className="form__block__input__error">
                  <div className="form__block__input__error--message">
                    Please enter recipient full name
                  </div>
                </div>
                <input placeholder="Full Name" type="text" />
              </div>
              <div className="form__block__input--medium">
                <div className="form__block__input__error">
                  <div className="form__block__input__error--message">
                    Please enter valid number
                  </div>
                </div>
                <input placeholder="Daytime Phone" type="text" />
                <label>For delivery questions only</label>
              </div>
            </div>
          </div>
          <div className="form__block">
            <h2>Address</h2>
            <div className="form__block__input">
              <div className="form__block__input--full">
                <div className="form__block__input__error">
                  <div className="form__block__input__error--message">
                    Please enter valid address
                  </div>
                </div>
                <input placeholder="Street Address" type="text" />
              </div>
              <div className="form__block__input--full">
                <input placeholder="Apt, Suite, Bldg, Gate Code. (optional)" type="text" />
              </div>
              <div className="out">
                <div className="form__block__input--full">
                  <div className="form__block__input__error">
                    <div className="form__block__input__error--message">
                      Please enter valid city
                    </div>
                  </div>
                  <input placeholder="City" type="text" />
                </div>
              </div>
              <div className="out">
                <div className="form__block__input--medium">
                  <div className="form__block__input__error">
                    <div className="form__block__input__error--message">
                      Please enter valid country
                    </div>
                  </div>
                  <input placeholder="Country" type="text" />
                </div>
                <div className="form__block__input--short">
                  <div className="form__block__input__error">
                    <div className="form__block__input__error--message">Please enter valid ZIP</div>
                  </div>
                  <input placeholder="ZIP" type="text" />
                </div>
              </div>
            </div>
          </div>
          <button>Continue</button>
        </form>
      </div>
    </div>
  );
}

export default Shipping;
