import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import Favorite from '../../components/Favorite/Favorite';

const Header = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.list__container}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/people?page=1">People</NavLink>
        <NavLink to="/not-found">Not Found</NavLink>
        <NavLink to="/search">Search</NavLink>
      </ul>
      <Favorite />
    </div>
  );
};

export default Header;
