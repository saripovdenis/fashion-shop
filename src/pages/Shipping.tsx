import React from 'react';
import { PageHeader } from '../components';

import { useDispatch } from 'react-redux';
import { SubmitHandler, useForm } from 'react-hook-form';

import { createPushShippingAction } from '../redux/actions/info';
import { InfoShipping } from '../types';

const Shipping = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<InfoShipping>();

  const dispatch = useDispatch();

  const onSubmit: SubmitHandler<InfoShipping> = (data: InfoShipping) => {
    dispatch(createPushShippingAction(data));
  };

  return (
    <div className="page">
      <PageHeader />

      <div className="page__content">
        <h1>Shipping Info</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form__block">
            <h2>Recipient</h2>
            <div className="form__block__input">
              <div className="form__block__input--full">
                {errors.name && (
                  <div className="form__block__input__error">
                    <div className="form__block__input__error--message">This field is required</div>
                  </div>
                )}
                <input
                  {...register('name', {
                    required: true,
                    pattern: /\w\s\w\s?\w?/,
                  })}
                  placeholder="Full Name"
                  type="text"
                />
              </div>
              <div className="form__block__input--medium">
                {errors.phone && (
                  <div className="form__block__input__error">
                    <div className="form__block__input__error--message">
                      Please, enter valid phone number
                    </div>
                  </div>
                )}
                <input
                  {...register('phone', {
                    pattern: /\+?\d\d\d\d\d\d\d\d\d\d\d/,
                  })}
                  placeholder="Daytime Phone"
                  type="number"
                />
                <label>For delivery questions only</label>
              </div>
            </div>
          </div>
          <div className="form__block">
            <h2>Address</h2>
            <div className="form__block__input">
              <div className="form__block__input--full">
                {errors.address && (
                  <div className="form__block__input__error">
                    <div className="form__block__input__error--message">This field is required</div>
                  </div>
                )}
                <input
                  {...register('address', { required: true })}
                  placeholder="Street Address"
                  type="text"
                />
              </div>
              <div className="form__block__input--full">
                <input placeholder="Apt, Suite, Bldg, Gate Code. (optional)" type="text" />
              </div>
              <div className="out">
                <div className="form__block__input--full">
                  {/* {cityDirty && cityError && (
                    <div className="form__block__input__error">
                      <div className="form__block__input__error--message">{cityError}</div>
                    </div>
                  )} */}
                  <input
                    {...register('city', { required: true })}
                    name="city"
                    placeholder="City"
                    type="text"
                  />
                </div>
              </div>
              <div className="out">
                <div className="form__block__input--medium">
                  {/* {countryDirty && countryError && (
                    <div className="form__block__input__error">
                      <div className="form__block__input__error--message">{countryError}</div>
                    </div>
                  )} */}
                  <input
                    {...register('country', { required: true })}
                    name="country"
                    placeholder="Country"
                    type="text"
                  />
                </div>
                <div className="form__block__input--short">
                  {/* {zipDirty && zipError && (
                    <div className="form__block__input__error">
                      <div className="form__block__input__error--message">{zipError}</div>
                    </div>
                  )} */}
                  <input
                    {...register('zip', { required: true, pattern: /\d\d\d\d\d\d/ })}
                    name="zip"
                    placeholder="ZIP"
                    type="number"
                  />
                </div>
              </div>
            </div>
          </div>
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Shipping;
