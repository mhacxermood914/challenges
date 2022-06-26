import React from 'react';

function Buttons({
  text, bgcolor, textcolor, wsize, type,
}:any) {
  const customeStyle = {
    backgroundColor: bgcolor,
    color: textcolor,
  };
  const customeClassName = `${wsize}  rounded-full py-2 font-medium text-sm`;
  if(type == "icon")
    return (
      <button type="button" style={customeStyle} className={customeClassName}>
        icon
      </button>
    );
  else
    return (
      <button type="button" style={customeStyle} className={customeClassName}>
        {text}
      </button>
    );
}

export default Buttons;
