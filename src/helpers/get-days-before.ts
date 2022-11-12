const getDaysBefore = (createdAt: Date): number => {
  const oneDay = 24 * 60 * 60 * 1000;
  const firstDate = new Date(createdAt);
  const today = new Date();
  const diffDays = Math.floor(
    Math.abs((firstDate.getTime() - today.getTime()) / oneDay),
  );
  return diffDays;
};

export { getDaysBefore };
