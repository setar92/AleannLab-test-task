import React, { FC } from 'react';
import { useDispatch } from 'react-redux';

import { clsx } from 'clsx';

import { angleRightIcon, angleLeftIcon } from '../../assets';
import { useAppSelector } from '../../hooks/store/store.hooks';
import { setCurrentPage } from '../../store/jobs/slice';

const Pagination: FC = () => {
  const dispatch = useDispatch();
  const { totalPages, currentPage } = useAppSelector((state) => state.jobsList);

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

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
    <nav className="flex justify-center mt-12 mb-16 items-center">
      <div className=" h-[52px] flex justify-center rounded-lg bg-white drop-shadow-md items-center px-4">
        <button
          className="min-w-max mr-6 md:hidden"
          onClick={(): void => handleAngleClick('left')}
        >
          <img src={angleLeftIcon} alt="angleLeftIcon" />
        </button>
        <div className="h-8 mr-12 border-r-[1.5px] border-r-gray md:ml-12" />
        <ul className="flex justify-center text-grey font-bold">
          {pageNumbers.map((number) => (
            <li
              onClick={(): void => handlePageClick(number)}
              key={number}
              className={clsx(
                'w-8 h-[52px] font-bold text-xl border-y-[3px] border-transparent mr-2 hover:cursor-pointer  flex items-center justify-center',
                currentPage === number &&
                  ' text-brightBlue border-b-brightBlue',
              )}
            >
              <a href="!#" className="align-middle">
                {number}
              </a>
            </li>
          ))}
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
