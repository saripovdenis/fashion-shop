import React from 'react';

import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { useDispatch, useSelector } from 'react-redux';

import { History } from 'history';

import { PageHeader } from '../components';
import { RootState, InfoBilling } from '../types';

import { createPushBillingAction } from '../redux/actions/info';

interface Props {
  history: History;
}

const schema = yup.object().shape({
  name: yup
    .string()
    .required('This field is required')
    .matches(/\w\s\w\s?\w?/, 'Enter a valid name. For example: Jack Harlow'),
  email: yup
    .string()
    .required('This field is required')
    .matches(/@/, 'Enter a valid email. For example: fashion-shop@yandex.com'),
  address: yup.string().required('This field is required'),
  city: yup.string().required('This field is required'),
  country: yup.string().required('This field is required'),
  zip: yup
    .string()
    .required('This field is required')
    .matches(/\d\d\d\d\d\d/, 'Enter a valid zip. For example: 628600'),
});

function Billing({ history }: Props) {
  const dispatch = useDispatch();

  const { name, address, suite, city, country, zip } = useSelector(
    ({ info }: RootState) => info.shipping,
  );

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<InfoBilling>({ resolver: yupResolver(schema) });

  const onSubmit: SubmitHandler<InfoBilling> = (data: InfoBilling) => {
    dispatch(createPushBillingAction(data));
    history.push('/payment');
  };

  const sameHandler = () => {
    const options = { shouldValidate: true, shouldDirty: true };
    setValue('name', name, options);
    setValue('address', address, options);
    setValue('suite', suite, options);
    setValue('city', city, options);
    setValue('country', country, options);
    setValue('zip', zip, options);
  };

  return (
    <div className="page">
      <PageHeader active="billing" />

      <div className="page__content">
        <div className="title">
          <h1>Billing Information</h1>
          <button onClick={sameHandler}>Same as shipping</button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form__block">
            <h2>Billing contact</h2>
            <div className="form__block__input">
              <div className="form__block__input--full">
                {errors.name && (
                  <div className="form__block__input__error">
                    <div className="form__block__input__error--message">{errors.name.message}</div>
                  </div>
                )}
                <input {...register('name')} placeholder="Full Name" type="text" />
              </div>
              <div className="form__block__input--full">
                {errors.email && (
                  <div className="form__block__input__error">
                    <div className="form__block__input__error--message">{errors.email.message}</div>
                  </div>
                )}
                <input {...register('email')} placeholder="Email Address" type="text" />
              </div>
            </div>
          </div>
          <div className="form__block">
            <h2>Billing Address</h2>
            <div className="form__block__input">
              <div className="form__block__input--full">
                {errors.address && (
                  <div className="form__block__input__error">
                    <div className="form__block__input__error--message">
                      {errors.address.message}
                    </div>
                  </div>
                )}
                <input {...register('address')} placeholder="Street Address" type="text" />
              </div>
              <div className="form__block__input--full">
                <input
                  {...register('suite')}
                  placeholder="Apt, Suite, Bldg, Gate Code. (optional)"
                  type="text"
                />
              </div>
              <div className="out">
                <div className="form__block__input--full">
                  {errors.city && (
                    <div className="form__block__input__error">
                      <div className="form__block__input__error--message">
                        {errors.city.message}
                      </div>
                    </div>
                  )}
                  <input {...register('city')} name="city" placeholder="City" type="text" />
                </div>
              </div>
              <div className="out">
                <div className="form__block__input--medium">
                  {errors.country && (
                    <div className="form__block__input__error">
                      <div className="form__block__input__error--message">
                        {errors.country.message}
                      </div>
                    </div>
                  )}
                  <input
                    {...register('country')}
                    name="country"
                    placeholder="Country"
                    type="text"
                  />
                </div>
                <div className="form__block__input--short">
                  {errors.zip && (
                    <div className="form__block__input__error">
                      <div className="form__block__input__error--message">{errors.zip.message}</div>
                    </div>
                  )}
                  <input {...register('zip')} name="zip" placeholder="ZIP" type="number" />
                </div>
              </div>
            </div>
          </div>
          <input type="submit" />
        </form>
      </div>
    </div>
  );
}

export default Billing;
