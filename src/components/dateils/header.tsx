import { FC } from 'react';

import { frameIcon, BookmarkIcon, saveStarIcon } from '../../assets';

const Header: FC = () => {
  return (
    <header className="text-dark flex justify-between border-b-[1px] border-dark/20 md:flex-col md:border-none">
      <div className="text-[28px] font-bold md:border-b-[1px] md:border-dark/20">
        Job Details
      </div>
      <div className="font-normal text-lg flex">
        <div className="flex items-center hover:cursor-pointer">
          <BookmarkIcon
            isFill={false}
            onClick={(): void => console.log('click')}
            className="cursor-pointer sm:hidden"
          />
          <img
            className="mr-2 hover:cursor-pointer hidden sm:block"
            src={saveStarIcon}
            alt="saveStarIcon"
          />
          <span className="ml-4 mr-8 sm:ml-0 sm:text-base">
            Save to my list
          </span>
        </div>
        <div className="flex items-center">
          <img
            className="mr-2 hover:cursor-pointer sm:mr-0"
            src={frameIcon}
            alt="frameIcon"
          />
          <span className="sm:text-base">Share</span>
        </div>
      </div>
    </header>
  );
};

export { Header };
