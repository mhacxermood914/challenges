/* eslint-disable linebreak-style */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

import React from 'react';

const Header: React.FC<{ classes: any }> = ({ classes }) => {
  return (
    <div className={classes.header}>
      <img src="/icons/pet-icon.svg" alt="pet-icon" className={classes.img} />
    </div>
  );
};

export default Header;
