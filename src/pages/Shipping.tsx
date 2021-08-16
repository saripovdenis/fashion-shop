import React from 'react';
import { PageHeader } from '../components';

import { useDispatch, useSelector } from 'react-redux';

import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import InputMask from 'react-input-mask';

import { History } from 'history';

import { createPushShippingAction } from '../redux/actions/info';
import { InfoShipping, RootState } from '../types';

interface Props {
  history: History;
}

const schema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .required('This field is required')
    .matches(/\w\s\w\s?\w?/, 'Enter a valid name. For example: Jack Harlow'),
  phone: yup.string().trim().required('This field is required'),
  address: yup.string().trim().required('This field is required'),
  city: yup.string().trim().required('This field is required'),
  country: yup.string().trim().required('This field is required'),
  zip: yup
    .string()
    .trim()
    .length(6, 'Must be exactly 6 characters')
    .required('This field is required')
    .matches(/\d\d\d\d\d\d/, 'Enter a valid zip. For example: 628600'),
});

const Shipping = ({ history }: Props) => {
  const dispatch = useDispatch();
  const { name, phone, address, suite, city, country, zip } = useSelector(
    ({ info }: RootState) => info.shipping,
  );

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<InfoShipping>({ resolver: yupResolver(schema) });

  const onSubmit: SubmitHandler<InfoShipping> = (data: InfoShipping) => {
    dispatch(createPushShippingAction(data));
    history.push('/billing');
  };

  React.useEffect(() => {
    setValue('name', name);
    setValue('phone', phone);
    setValue('address', address);
    setValue('suite', suite);
    setValue('city', city);
    setValue('country', country);
    setValue('zip', zip);
  }, []);

  return (
    <div className="page">
      <PageHeader active="shipping" />

      <div className="page__content">
        <h1>Shipping Info</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form__block">
            <h2>Recipient</h2>
            <div className="form__block__input">
              <div className="form__block__input--full">
                {errors.name && (
                  <div className="form__block__input__error">
                    <div className="form__block__input__error--message">{errors.name.message}</div>
                  </div>
                )}
                <input {...register('name')} placeholder="Full Name" type="text" />
              </div>
              <div className="form__block__input--medium">
                {errors.phone && (
                  <div className="form__block__input__error">
                    <div className="form__block__input__error--message">{errors.phone.message}</div>
                  </div>
                )}
                <InputMask
                  mask="+7 (999) 999-99-99"
                  {...register('phone')}
                  placeholder="Daytime Phone"
                  type="text"
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
                    <div className="form__block__input__error--message">
                      {errors.address.message}
                    </div>
                  </div>
                )}
                <input
                  {...register('address', { required: true })}
                  placeholder="Street Address"
                  type="text"
                />
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
};

export default Shipping;
