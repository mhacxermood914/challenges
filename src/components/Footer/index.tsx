/* eslint-disable linebreak-style */

import React from 'react';

const Footer: React.FC<{ bgColor: string, height: string }> = ({ bgColor, height }) => {
  return (
    <div className={`bg-${bgColor} h-${height}`} />
  );
};

export default Footer;
