import React from 'react';

const Spinner = ({ isSpin }) => {
  if (isSpin) {
    return (
      <div className="spinner">
        <div className="lds-hourglass"></div>
      </div>
    );
  }
  return null;
};

export default Spinner;
