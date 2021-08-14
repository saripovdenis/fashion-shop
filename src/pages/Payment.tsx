import React from 'react';

import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { useDispatch } from 'react-redux';
import { createPushPaymentAction } from '../redux/actions/info';

import { History } from 'history';

import { PageHeader } from '../components';
import { InfoPayment } from '../types';

interface Props {
  history: History;
}

const schema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .required('This field is required')
    .matches(/\w\s\w\s?\w?/, 'Enter a valid name. For example: Jack Harlow'),
  card: yup
    .string()
    .trim()
    .required('This field is required')
    .matches(
      /\d\d\d\d\s\d\d\d\d\s\d\d\d\d\s\d\d\d\d/,
      'Enter a valid card. For example: 1111 1111 1111 1111',
    ),
  date: yup
    .string()
    .trim()
    .required('This field is required')
    .matches(/\d\d\/\d\d/, 'Enter a valid date. For example: 09/11'),
  code: yup
    .string()
    .trim()
    .length(3, 'Must be exactly 3 characters')
    .required('This field is required')
    .matches(/\d\d\d/, 'Enter a valid zip. For example: 600'),
});

function Payment({ history }: Props) {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InfoPayment>({ resolver: yupResolver(schema) });

  const onSubmit: SubmitHandler<InfoPayment> = (data: InfoPayment) => {
    dispatch(createPushPaymentAction(data));
    history.push('./success');
  };

  return (
    <div className="page">
      <PageHeader active="payment" />

      <div className="page__content">
        <h1>Payment</h1>

        {/* <svg></svg> */}
        <span>This is a secure 128-bit SSL encrypted payment.</span>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form__block">
            <h2>Cardholder Name</h2>
            <div className="form__block__input">
              <div className="form__block__input--full">
                {errors.name && (
                  <div className="form__block__input__error">
                    <div className="form__block__input__error--message">{errors.name.message}</div>
                  </div>
                )}
                <input
                  {...register('name')}
                  placeholder="Name as it appears on your card"
                  type="text"
                />
              </div>
            </div>
          </div>
          <div className="form__block">
            <h2>Card Number</h2>
            <div className="form__block__input">
              <div className="form__block__input--full">
                {errors.card && (
                  <div className="form__block__input__error">
                    <div className="form__block__input__error--message">{errors.card.message}</div>
                  </div>
                )}
                <input {...register('card')} placeholder="XXXX XXXX XXXX XXXX" type="text" />
              </div>
            </div>
          </div>
          <div className="form__block">
            <div className="out">
              <div>
                <h2>Expire Date</h2>
                <div className="form__block__input">
                  <div className="form__block__input--short">
                    {errors.date && (
                      <div className="form__block__input__error">
                        <div className="form__block__input__error--message">
                          {errors.date.message}
                        </div>
                      </div>
                    )}
                    <input {...register('date')} placeholder="MM/YY" type="text" />
                  </div>
                </div>
              </div>
              <div>
                <h2>Security Code</h2>
                <div className="form__block__input">
                  <div className="form__block__input--short">
                    {errors.code && (
                      <div className="form__block__input__error">
                        <div className="form__block__input__error--message">
                          {errors.code.message}
                        </div>
                      </div>
                    )}
                    <input {...register('code')} placeholder="XXX" type="password" />
                  </div>
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

export default Payment;
