/* eslint-disable linebreak-style */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

import React from 'react';

const Header: React.FC<{ bgColor: string, height: string, logoUrl?: string }> = ({ bgColor, height }) => {
  return (
    <div className={`bg-${bgColor} h-${height}`}>ok</div>
  );
};

export default Header;
