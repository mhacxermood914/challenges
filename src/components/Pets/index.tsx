/* eslint-disable linebreak-style */
/* eslint-disable import/no-unresolved */
import React from 'react';
import Buttons from 'core-ui/components(common components)/Buttons';

const Pets: React.FC<{ photo: string, id: string, name: string }> = ({ photo, id, name }) => {
  return (
    <div>
      <img src={photo} key={id} alt={name} className="h-64 object-cover rounded-xl w-full" />
      <div className="py-4">
        <span className="font-semibold block">{name}</span>
        <Buttons classes={{ btn: 'bg-light-blue text-white w-24 py-2 my-2' }}>View</Buttons>
      </div>
    </div>
  );
};

export default Pets;
