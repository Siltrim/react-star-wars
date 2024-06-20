import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';

import Header from '../Header';
import routesConfig from '../../routes/routesConfig';

import styles from './App.module.css';
import { RouteChangeHandler } from '../../components/RouteChange/RouteChangeHandler';

const App = () => {
  return (
    <BrowserRouter>
      <div className={styles.wrapper}>
        <Header />
        <Routes>
          {routesConfig.map((route, index) => {
            <React.Fragment key={index}>
              <RouteChangeHandler desk={route.desk} />
              <Route path={route.path} element={route.element} />
            </React.Fragment>;
          })}
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;

// <BrowserRouter>
//   <NavLink to="/" exact>
//     Home
//   </NavLink>
//   <NavLink to="/people" exact>
//     People
//   </NavLink>
//   <Route path="/people" exact component={PeoplePage} />;
// </BrowserRouter>
