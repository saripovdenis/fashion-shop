import React from 'react';

import { Link } from 'react-router-dom';

function Start() {
  return (
    <div className="page">
      <div className="page__content">
        <div className="page__content--button">
          <Link to="./shipping">
            <button>Перейти к доставке</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Start;
