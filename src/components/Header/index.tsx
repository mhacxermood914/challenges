/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

import React from 'react';

const Header: React.FC<{ bgColor: string, height: string, logoUrl: string }> = ({ bgColor, height, logoUrl }) => {
  return (
    <div className={`bg-${bgColor} h-${height}`} />
  );
};

export default Header;
