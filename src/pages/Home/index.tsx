/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */

import React from 'react';
import { useSelector } from 'react-redux';
import { usePetsQuery } from 'services/api/pets';
import Pets from 'components/Pets';
import Slider from 'react-slick';
import SearchBar from 'core-ui/components(common components)/SearchBar';
import { PrevArrow, NextArrow } from 'core-ui/components(common components)/Arrows';

const Home: React.FC<{}> = () => {
  const { data } = usePetsQuery('pets');
  const [pets, setPets] = React.useState<any>(null);
  const settings = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow className={undefined} style={undefined} onClick={undefined} />,
  };

  React.useEffect(() => {
    if (data) setPets(data.pets);
  }, [data]);

  return (
    <>
      <h1 className="font-bold lg:text-2xl mb-4">
        Pets
      </h1>
      <SearchBar placeholder="Search for pets" border="border" answers={['begale', 'toogle']} wsize="w-60" hsize="h-40" />
      <h2 className="font-bold text-xl">Results</h2>
      <Slider {...settings}>
        {
          pets && pets.map((el: any, i: any) => {
            return (
              <Pets photo={el.photo} name={el.name} id={el.id} />
            );
          })
        }
      </Slider>
    </>
  );
};

export default Home;
