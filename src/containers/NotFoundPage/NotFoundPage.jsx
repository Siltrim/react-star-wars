import React, { useEffect } from 'react';
import styles from './NotFoundPage.module.css';
import img from './img/not-found.png';
import { useLocation } from 'react-router';
import ReactGA from 'react-ga4';

const NotFoundPage = () => {
  let location = useLocation();

  useEffect(() => {
    ReactGA.send({ hitType: 'pageview', page: location.pathname + location.search });
  }, [location]);
  return (
    <>
      <img className={styles.img} src={img} alt="Not found" />
      <p className={styles.text}>
        No match for <u>{location.pathname}</u>
      </p>
    </>
  );
};

export default NotFoundPage;
