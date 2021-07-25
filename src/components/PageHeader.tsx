import React from 'react';

function PageHeader() {
  return (
    <div className="page__header">
      <div className="page__header__item">
        <div className="page__header__item--active">Shipping</div>
      </div>

      <div className="page__header__item">
        <svg
          width="8"
          height="15"
          viewBox="0 0 8 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0.5 0.5L6.79289 6.79289C7.18342 7.18342 7.18342 7.81658 6.79289 8.20711L0.5 14.5"
            stroke="#d3d3d3"
          />
        </svg>
      </div>

      <div className="page__header__item">Billing</div>
      <div className="page__header__item">
        <svg
          width="8"
          height="15"
          viewBox="0 0 8 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0.5 0.5L6.79289 6.79289C7.18342 7.18342 7.18342 7.81658 6.79289 8.20711L0.5 14.5"
            stroke="#d3d3d3"
          />
        </svg>
      </div>
      <div className="page__header__item">Payment</div>
    </div>
  );
}

export default PageHeader;
