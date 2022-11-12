import { getRandomNumber } from './';
interface IRate {
  id: string;
  rate: number;
}

const setRate = (id: string): number => {
  const rateList = localStorage.getItem('rate');
  if (rateList) {
    const list = JSON.parse(rateList) as IRate[];
    const currentRate: IRate = { id: id, rate: getRandomNumber(2, 5) };
    const newList: IRate[] = [...list, currentRate];
    localStorage.setItem('rate', JSON.stringify(newList));
    return currentRate.rate;
  }
  const currentRate: IRate = { id: id, rate: getRandomNumber(2, 5) };
  localStorage.setItem('rate', JSON.stringify([currentRate]));
  return currentRate.rate;
};

const getRate = (id: string): number => {
  const rateList = localStorage.getItem('rate');
  if (rateList) {
    const list = JSON.parse(rateList) as IRate[];
    const currentRate = list.find((rate) => rate.id === id);
    if (currentRate) {
      return currentRate.rate;
    }
    return setRate(id);
  }
  return setRate(id);
};

export { getRate };
