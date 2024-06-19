import React, { useEffect } from 'react';
import ChooseSide from '../../components/HomePage/ChooseSide/ChooseSide';
import { useLocation } from 'react-router';

import ReactGA from 'react-ga4';

const HomePage = () => {
  const location = useLocation();
  useEffect(() => {
    ReactGA.send({
      hitType: 'page_view',
      page_location: window.location.href,
      page_path: location.pathname,
      page_title: document.title,
    });
  }, [location]);
  return (
    <>
      <h1 className="header__text">Home Page</h1>;
    </>
  );
};

export default HomePage;
