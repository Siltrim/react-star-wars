import React, { useEffect, useState } from 'react';
import icon from './img/bookmark.svg';
import styles from './Favorite.module.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Favorite = () => {
  const [count, setCount] = useState(0);

  const storeDate = useSelector((state) => state.favoriteReducer);

  useEffect(() => {
    const length = Object.keys(storeDate).length;
    length.toString().length > 2 ? setCount('...') : setCount(length);
    setCount(length);
  });

  return (
    <div className={styles.container}>
      <Link to="/favorites">
        <span className={styles.counter}>{count}</span>
        <img className={styles.icon} src={icon} alt="Favotires" />
      </Link>
    </div>
  );
};

export default Favorite;
