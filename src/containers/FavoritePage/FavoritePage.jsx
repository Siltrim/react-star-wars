import React, { useEffect, useState } from 'react';

import styles from './FavoritePage.module.css';
import { useSelector } from 'react-redux';
import PeopleList from '../../components/PeoplePage/PeopleList/PeopleList';
import { useLocation } from 'react-router';

const FavoritePage = () => {
  const [people, setPeople] = useState([]);

  const storeDate = useSelector(state => state.favoriteReducer);

  const location = useLocation();

  useEffect(() => {
    const arr = Object.entries(storeDate);

    if (arr.length) {
      const res = arr.map(item => {
        return {
          id: item[0],
          ...item[1],
        };
      });
      setPeople(res);
    }
  }, []);

  return (
    <div>
      <h1 className="header__text">FavoritesPage</h1>
      {people.length ? (
        <PeopleList people={people} />
      ) : (
        <h2 className={styles.comment}>No data</h2>
      )}
    </div>
  );
};

export default FavoritePage;
