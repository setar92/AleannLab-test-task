import React, { FC } from 'react';
import { useDispatch } from 'react-redux';

import { clsx } from 'clsx';

import { angleRightIcon, angleLeftIcon } from '../../assets';
import { getPagesNumbers } from '../../helpers';
import { useAppSelector } from '../../hooks/store/store.hooks';
import { setCurrentPage } from '../../store/jobs/slice';

const Pagination: FC = () => {
  const dispatch = useDispatch();
  const { totalPages, currentPage } = useAppSelector((state) => state.jobsList);

  const pagesNumbers: number[] = getPagesNumbers();
  const handleAngleClick = (angleType: 'left' | 'right'): void => {
    switch (angleType) {
      case 'left': {
        currentPage - 1 > 0
          ? dispatch(setCurrentPage(currentPage - 1))
          : dispatch(setCurrentPage(1));
        break;
      }
      case 'right': {
        currentPage + 1 > totalPages
          ? dispatch(setCurrentPage(currentPage))
          : dispatch(setCurrentPage(currentPage + 1));
        break;
      }
    }
  };

  const handlePageClick = (pageNumber: number): void => {
    dispatch(setCurrentPage(pageNumber));
  };

  return (
    <nav className="flex w-[100%] justify-center mt-12 items-center mb-16">
      <div className=" h-[52px] flex justify-center rounded-lg bg-white drop-shadow-md items-center px-4 sm:bg-cardFon">
        <button
          className="min-w-max mr-6 md:hidden"
          onClick={(): void => handleAngleClick('left')}
        >
          <img src={angleLeftIcon} alt="angleLeftIcon" />
        </button>
        <div className="h-8 mr-12 border-r-[1.5px] border-r-gray md:ml-12" />
        <ul className="flex justify-center text-grey font-bold">
          {pagesNumbers.map((number) => (
            <li
              onClick={(): void => handlePageClick(number)}
              key={number}
              className={clsx(
                'w-8 h-[52px] font-bold text-xl border-y-[3px] border-transparent mr-2 hover:cursor-pointer  flex items-center justify-center sm:text-base md:w-6',
                currentPage === number &&
                  ' text-brightBlue border-b-brightBlue',
              )}
            >
              <a href="!#" className="align-middle">
                {number}
              </a>
            </li>
          ))}
          {totalPages > 7 && currentPage + 2 < totalPages && (
            <li className="w-8 h-[52px] font-bold text-xl border-y-[3px] border-transparent mr-2 flex items-center justify-center sm:text-base md:w-6">
              ...
            </li>
          )}
          {totalPages > 7 && currentPage + 2 < totalPages && (
            <li
              onClick={(): void => handlePageClick(totalPages)}
              className={clsx(
                'w-8 h-[52px] font-bold text-xl border-y-[3px] border-transparent mr-2 hover:cursor-pointer  flex items-center justify-center sm:text-base md:w-6',
                currentPage === totalPages &&
                  ' text-brightBlue border-b-brightBlue',
              )}
            >
              <a href="!#" className="align-middle">
                {totalPages}
              </a>
            </li>
          )}
        </ul>
        <div className=" h-8 border-r-[1.5px] ml-12 border-r-gray md:mr-12" />
        <button
          className="min-w-max h-14 text-gray/60 font-extrabold ml-6 md:hidden"
          onClick={(): void => handleAngleClick('right')}
        >
          <img src={angleRightIcon} alt="angleLeftIcon" />
        </button>
      </div>
    </nav>
  );
};

export { Pagination };
