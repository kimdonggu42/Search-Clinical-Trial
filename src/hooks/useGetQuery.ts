import { BASE_API } from '../utils/api';

export interface Trial {
  sickCd?: string;
  sickNm: string;
}

interface Caching {
  date: Date;
  data: Trial[];
}

interface History {
  [key: string]: Caching;
}

export const useGetQuery = () => {
  const reqHistory: History = {};

  const getQuery = async (word: string) => {
    if (!word.length) {
      return [];
    }

    let cached: Caching = reqHistory[word];

    if (!cached || Number(new Date()) - Number(cached.date) > 5 * 60 * 1000) {
      try {
        const res = await BASE_API(`/sick?q=${word}`);
        console.info('calling api');
        reqHistory[word] = { date: new Date(), data: res.data };
        cached = reqHistory[word];
      } catch (err) {
        console.error(err);
        return [];
      }
    }
    return cached.data;
  };

  return { getQuery };
};
