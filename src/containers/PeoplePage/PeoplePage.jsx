import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import withErrorApi from '../../hoc-helpers/withErrorApi';
import PeopleList from '../../components/PeoplePage/PeopleList';
import {
  getPeopleId,
  getPeopleImage,
  getPeoplePageId,
} from '../../services/getPeopleData';
import { changeHTTP, getApiResourse } from '../../utils/network';
import { API_PEOPLE } from '../../constants/api';
import { useQueryParams } from '../../hooks/useQueryParams';
import PeopleNavigation from '../../components/PeoplePage/PeopleNavigation/PeopleNavigation';
import { useLocation } from 'react-router';

const PeoplePage = ({ setErrorApi }) => {
  const [people, setPeople] = React.useState(null);
  const [prevPage, setPrevPage] = React.useState(null);
  const [nextPage, setNextPage] = React.useState(null);
  const [counterPage, setCounterPage] = React.useState(1);

  const query = useQueryParams();
  const queryPage = query.get('page');

  const location = useLocation();

  const getResource = async url => {
    const res = await getApiResourse(url);

    if (res) {
      const peopleList = res.results.map(({ name, url }) => {
        const id = getPeopleId(url);
        const img = getPeopleImage(id);
        return {
          id,
          name,
          img,
        };
      });
      setPeople(peopleList);
      setPrevPage(changeHTTP(res.previous));
      setNextPage(changeHTTP(res.next));
      setCounterPage(getPeoplePageId(url));
      setErrorApi(false);
    } else {
      setErrorApi(true);
    }
  };

  useEffect(() => {
    getResource(API_PEOPLE + queryPage);
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <PeopleNavigation
        getResource={getResource}
        prevPage={prevPage}
        nextPage={nextPage}
        counterPage={counterPage}
      />
      {people && <PeopleList people={people} />}
    </>
  );
};

PeoplePage.propTypes = {
  setErrorApi: PropTypes.func,
};

export default withErrorApi(PeoplePage);
