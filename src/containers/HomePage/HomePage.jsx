import React, { useEffect } from 'react';
import ChooseSide from '../../components/HomePage/ChooseSide/ChooseSide';
import { RouteChangeHandler } from '../../components/RouteChange/RouteChangeHandler';

const HomePage = () => {
  window.gtag('page_view', 'G-LGCNLB68LD', {
    page_path: window.location.pathname,
    page_title: document.title,
    page_description: 'Home page',
  });
  return (
    <>
      <RouteChangeHandler desk={'Home page'} />
      <h1 className="header__text">Home Page</h1>;
    </>
  );
};

export default HomePage;
