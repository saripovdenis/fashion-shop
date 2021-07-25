import React from 'react';

function Billing() {
  return (
    <div className="page__content">
      <div className="title">
        <h1>Billing Information</h1>
        <button>Same as shipping</button>
      </div>

      <form>
        <div className="form__block">
          <h2>Billing Contact</h2>
          <div className="form__block__input">
            <input placeholder="Full Name" type="text" />
            <div className="form__block__input--medium">
              <input placeholder="Daytime Phone" type="text" />
            </div>
          </div>
        </div>
        <div className="form__block">
          <h2>Billing Address</h2>
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
          <button>Continue</button>
        </div>
      </form>
    </div>
  );
}

export default Billing;
