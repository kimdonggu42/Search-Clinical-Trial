import { BASE_API } from '../utils/api';
import { CachingData } from '../utils/type';
import { History } from '../utils/type';

export const useGetQuery = () => {
  const reqHistory: History = {};

  const getQuery = async (word: string) => {
    if (!word.length) {
      return [];
    }

    let cached: CachingData = reqHistory[word];

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
