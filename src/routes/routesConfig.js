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
  },
  {
    path: '/people',
    element: <PeoplePage />,
  },
  {
    path: '/people/:id',
    element: <PersonPage />,
  },
  {
    path: '/not-found',
    element: <NotFoundPage />,
  },
  {
    path: '/favorites',
    element: <FavoritePage />,
  },
  {
    path: '/search',
    element: <SearchPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
];

export default routesConfig;
