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
              <input placeholder="Full Name" type="text" />
              <div className="form__block__input--medium">
                <input placeholder="Daytime Phone" type="text" />
                <label>For delivery questions only</label>
              </div>
            </div>
          </div>
          <div className="form__block">
            <h2>Address</h2>
            <div className="form__block__input">
              <input placeholder="Street Address" type="text" />
              <br />
              <input placeholder="Apt, Suite, Bldg, Gate Code. (optional)" type="text" />
              <div className="out">
                <input placeholder="City" type="text" />
              </div>
              <div className="out">
                <div className="form__block__input--medium">
                  <input placeholder="Country" type="text" />
                </div>
                <div className="form__block__input--short">
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
