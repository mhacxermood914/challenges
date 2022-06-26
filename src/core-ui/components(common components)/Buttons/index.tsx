/* eslint-disable linebreak-style */
import React from 'react';

function Buttons({
  text, bgcolor, textcolor, wsize, isicon,
}:any) {
  const customeStyle = {
    backgroundColor: bgcolor,
    color: textcolor,
  };
  const customeClassName = `${wsize}  rounded-full py-2 font-medium text-sm`;
  if (isicon) {
    return (
      <button type="button" style={customeStyle} className={customeClassName}>
        icon
      </button>
    );
  }
  return (
    <button type="button" style={customeStyle} className={customeClassName}>
      {text}
    </button>
  );
}

export default Buttons;
