import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { onRouteChange } from '../../services/handleGoogleAnalytics';

export const RouteChangeHandler = ({ desk }) => {
  const location = useLocation();

  useEffect(() => {
    const description = desk;
    onRouteChange(description);
  }, [location]);

  return <></>;
};
