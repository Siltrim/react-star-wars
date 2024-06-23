import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './PeopleNavigation.module.css';
import UiButton from '../../UI/UiButton/UiButton';

const PeopleNavigation = ({ getResource, prevPage, nextPage, counterPage }) => {
  const handleChangeNext = () => {
    window.gtag('event', 'click', {
      event_category: 'button',
      event_label: 'Next Button',
    });
    getResource(nextPage);
  };
  const handleChangePrev = () => {
    window.gtag('event', 'click', {
      event_category: 'button',
      event_label: 'Prev Button',
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
