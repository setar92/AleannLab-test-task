const getRandomNumber = (min: number, max: number): number => {
  const rundomNumber = Math.ceil(Math.random() * (max - min)) + min;

  return rundomNumber;
};

export { getRandomNumber };
