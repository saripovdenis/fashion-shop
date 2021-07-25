import React from 'react';
import { Shipping, PageHeader, Billing, Payment } from './index';

function Info() {
  return (
    <div className="page">
      <PageHeader />
      {/* <Shipping /> */}
      <Billing />
      {/* <Payment /> */}
    </div>
  );
}

export default Info;
