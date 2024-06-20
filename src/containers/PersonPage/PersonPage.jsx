import React, { Suspense, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { useLocation, useParams } from 'react-router';
import { API_PERSON } from '../../constants/api';
import { getApiResourse } from '../../utils/network';
import withErrorApi from '../../hoc-helpers/withErrorApi';
import { getPeopleImage } from '../../services/getPeopleData';
import PersonInfo from '../../components/PersonPage/PersonInfo/PersonInfo';
import PersonPhoto from '../../components/PersonPage/PersonPhoto/PersonPhoto';
import PersonLinkBack from '../../components/PersonPage/PersonLinkBack/PersonLinkBack';

import styles from './PersonPage.module.css';
import UiLoading from '../../components/UI/UiLoading/UiLoading';
import { useSelector } from 'react-redux';

const PersonFilms = React.lazy(() =>
  import('../../components/PersonPage/PersonFilms/PersonFilms'),
);

const PersonPage = ({ setErrorApi }) => {
  const { id } = useParams();
  const [personInfo, setPersonInfo] = useState(null);
  const [personName, setPersonName] = useState(null);
  const [personPhoto, setPersonPhoto] = useState(null);
  const [personFilms, setPersonFilms] = useState(null);
  const [personId, setPersonId] = useState(null);
  const [personFavorite, setPersonFavorite] = useState(false);

  const location = useLocation();

  const storeDate = useSelector(state => state.favoriteReducer);

  useEffect(() => {
    (async () => {
      const res = await getApiResourse(`${API_PERSON}/${id}/`);

      storeDate[id] ? setPersonFavorite(true) : setPersonFavorite(false);

      setPersonId(id);

      if (res) {
        setPersonInfo([
          { title: 'Height', data: res.height },
          { title: 'Mass', data: res.mass },
          { title: 'Hair Color', data: res.hair_color },
          { title: 'Skin Color', data: res.skin_color },
          { title: 'Eye Color', data: res.eye_color },
          { title: 'Birth Year', data: res.birth_year },
          { title: 'Gender', data: res.gender },
        ]);
        setPersonName(res.name);
        setPersonPhoto(getPeopleImage(id));
        res.films.length && setPersonFilms(res.films);
      } else {
        setErrorApi(true);
      }
    })();
  }, []);
  return (
    <>
      <PersonLinkBack />
      <div className={styles.wrapper}>
        <span className={styles.person__name}> {personName}</span>

        <div className={styles.container}>
          <PersonPhoto
            personFavorite={personFavorite}
            setPersonFavorite={setPersonFavorite}
            personId={personId}
            personPhoto={personPhoto}
            personName={personName}
          />
          {personInfo && <PersonInfo personInfo={personInfo} />};
          {personFilms && (
            <Suspense fallback={<UiLoading />}>
              <PersonFilms personFilms={personFilms} />
            </Suspense>
          )}
        </div>
      </div>
    </>
  );
};

PersonPage.propTypes = {
  setErrorApi: PropTypes.func,
};

export default withErrorApi(PersonPage);
