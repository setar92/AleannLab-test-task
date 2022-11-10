import { FC } from 'react';

import { getDaysBefore, formatSalary } from '../../../helpers';

interface TitleProps {
  title: string;
  salary: string;
  createdAt: Date;
}

const Title: FC<TitleProps> = ({ title, salary, createdAt }) => {
  return (
    <div className="flex w-[100%] justify-between sm:flex-col">
      <div className="w-[500px] mr-4 sm:max-w-[100%]">
        <div className="text-dark font-bold text-2xl">{title}</div>
        <div className="text-lg text-stars/40 my-2 sm:hidden">
          Posted {getDaysBefore(createdAt)} days ago
        </div>
      </div>
      <div className="sm:flex sm:justify-between">
        <div className="text-sm text-stars/40 my-2 hidden sm:block">
          Posted {getDaysBefore(createdAt)} days ago
        </div>
        <div className="flex flex-col-reverse">
          <div className="text-dark font-bold text-xl text-right whitespace-nowrap sm:mb-3">
            {formatSalary(salary)}
          </div>
          <div className="font-normal text-lg sm:text-right sm:mt-1">
            Brutto per year
          </div>
        </div>
      </div>
    </div>
  );
};

export { Title };
