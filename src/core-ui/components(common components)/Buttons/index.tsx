/* eslint-disable linebreak-style */
import React from 'react';

function Buttons({
  text, bgcolor, textcolor, wsize, hsize, isicon,
}:any) {
  const customeStyle = {
    color: textcolor,
  };

  let customeClassName = `${wsize} ${bgcolor} rounded-full font-medium text-sm`;
  if (isicon) {
    customeClassName = `${hsize} ${customeClassName} flex items-center justify-center`;
    return (
      <button type="button" style={customeStyle} className={customeClassName}>
        <img src="/icons/arrow-right.svg" alt="arrow ico" />
      </button>
    );
  }
  customeClassName = `py-2 ${customeClassName}`;

  return (
    <button type="button" style={customeStyle} className={customeClassName}>
      {text}
    </button>
  );
}

export default Buttons;
