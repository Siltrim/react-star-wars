import React, { useEffect } from 'react';
import ChooseSide from '../../components/HomePage/ChooseSide/ChooseSide';
import { useLocation } from 'react-router';

const HomePage = () => {
  const location = useLocation();

  return (
    <>
      <h1 className="header__text">Home Page</h1>;
    </>
  );
};

export default HomePage;
