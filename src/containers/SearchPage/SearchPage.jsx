import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import SearchPageInfo from '../../components/SearchPage/SearchPageInfo';
import styles from './SearchPage.module.css';
import { getApiResourse } from '../../utils/network';
import { API_SEARCH } from '../../constants/api';
import withErrorApi from '../../hoc-helpers/withErrorApi';
import { getPeopleId, getPeopleImage } from '../../services/getPeopleData';
import { debounce } from 'lodash';
import UiInput from '../../components/UI/UiInput/UiInput';
import { useLocation } from 'react-router';

const SearchPage = ({ setErrorApi }) => {
  const [inputSearchValue, setInputSearchValue] = useState('');
  const [people, setPeople] = useState([]);

  const location = useLocation();

  const getResponse = async param => {
    const res = await getApiResourse(API_SEARCH + param);

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
      setErrorApi(false);
    } else {
      setErrorApi(true);
    }
  };

  useEffect(() => {
    getResponse('');
  }, []);

  const debounceGetResponse = useCallback(
    debounce(value => getResponse(value), 300),
    [],
  );

  const handleInputChange = value => {
    // const value = event.target.value;

    setInputSearchValue();
    debounceGetResponse(value);
  };

  return (
    <>
      <h1 className={styles.header__text}>Search</h1>
      <UiInput
        value={inputSearchValue}
        handleInputChange={handleInputChange}
        placeholder="Input characters's name"
        classes={styles.input__search}
      />
      <SearchPageInfo people={people}></SearchPageInfo>
    </>
  );
};

SearchPage.propTypes = {
  setErrorApi: PropTypes.func,
};

export default withErrorApi(SearchPage);
