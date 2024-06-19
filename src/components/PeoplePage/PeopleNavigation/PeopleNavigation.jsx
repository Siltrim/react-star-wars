import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './PeopleNavigation.module.css';
import UiButton from '../../UI/UiButton/UiButton';
import ReactGA from 'react-ga4';

const PeopleNavigation = ({ getResource, prevPage, nextPage, counterPage }) => {
  const handleChangeNext = () => {
    ReactGA.event({
      category: 'Персонажи',
      action: 'Нажатие на кнопку Next',
      label: `Страница ${counterPage + 1}`,
    });
    getResource(nextPage);
  };
  const handleChangePrev = () => {
    ReactGA.event({
      category: 'Персонажи',
      action: 'Нажатие на кнопку Previous',
      label: `Страница ${counterPage + 1}`,
    });
    getResource(prevPage);
  };
  return (
    <>
      <div className={styles.container}>
        <Link to={`/people/?page=${counterPage - 1}`}>
          <UiButton
            disabled={!prevPage}
            text="Previous"
            onClick={handleChangePrev}
          ></UiButton>
        </Link>
        <Link to={`/people/?page=${counterPage + 1}`}>
          <UiButton
            disabled={!nextPage}
            text="Next"
            onClick={handleChangeNext}
          ></UiButton>
        </Link>
      </div>
    </>
  );
};

PeopleNavigation.propTypes = {
  getResource: PropTypes.func,
  prevPage: PropTypes.string,
  nextPage: PropTypes.string,
  counterPage: PropTypes.number,
};

export default PeopleNavigation;
