import { useAppSelector } from '../hooks/store/store.hooks';

const getPagesNumbers = (): number[] => {
  const { totalPages, currentPage } = useAppSelector((state) => state.jobsList);

  const pagesNumbers: number[] = [];
  if (totalPages <= 7) {
    for (let i = 1; i <= totalPages; i++) {
      pagesNumbers.push(i);
    }
  } else if (currentPage <= 4) {
    for (let i = 1; i <= 5; i++) {
      pagesNumbers.push(i);
    }
  } else if (currentPage + 2 >= totalPages) {
    for (let i = totalPages - 6; i <= totalPages; i++) {
      pagesNumbers.push(i);
    }
  } else {
    for (let i = currentPage - 2; i <= currentPage + 2; i++) {
      pagesNumbers.push(i);
    }
  }

  return pagesNumbers;
};

export { getPagesNumbers };
