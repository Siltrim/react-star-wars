import { HTTP, HTTPS } from '../constants/api';

/**
 * Изменяет URL с HTTP НА HTTPS
 * @param {String} url - url для изменения
 * @returns {String} = url с HTTPS
 */

export const changeHTTP = (url) => {
  const result = url ? url.replace(HTTP, HTTPS) : url;

  return result;
};

/**
 * Отправляет запрос fetch
 * @param {String} url - url для запроса
 * @returns {Promise} - Promise с результатов запроса
 */

export const getApiResourse = async (url) => {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      console.error(res.status);
      return false;
    }
    return (await res).json();
  } catch (error) {
    return false;
  }
};

// (async () => {
//   const body = await getApiResourse(SWAPI_ROOT + SWAPI_PEOPLE);
// })();

export const makeConcurrentRequest = async (url) => {
  const res = await Promise.all(
    url.map((res) => {
      return fetch(res).then((res) => res.json());
    }),
  );

  return res;
};
