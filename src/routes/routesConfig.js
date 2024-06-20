import FavoritePage from '../containers/FavoritePage/FavoritePage';
import HomePage from '../containers/HomePage';
import NotFoundPage from '../containers/NotFoundPage';
import PeoplePage from '../containers/PeoplePage/PeoplePage';
import PersonPage from '../containers/PersonPage/PersonPage';
import SearchPage from '../containers/SearchPage/SearchPage';

const routesConfig = [
  {
    path: '/',
    element: <HomePage />,
    desk: 'Home page',
  },
  {
    path: '/people',
    element: <PeoplePage />,
    desk: 'People page',
  },
  {
    path: '/people/:id',
    element: <PersonPage />,
    desk: 'Person page',
  },
  {
    path: '/not-found',
    element: <NotFoundPage />,
    desk: 'Person page',
  },
  {
    path: '/favorites',
    element: <FavoritePage />,
    desk: 'Person page',
  },
  {
    path: '/search',
    element: <SearchPage />,
    desk: 'Person page',
  },
  {
    path: '*',
    element: <NotFoundPage />,
    desk: 'Person page',
  },
];

export default routesConfig;
