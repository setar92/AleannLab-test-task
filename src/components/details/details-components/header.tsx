import { FC, useState } from 'react';

import { frameIcon, BookmarkIcon, saveStarIcon } from '../../../assets';
import { changeIsSelected, getSelectedStatus } from '../../../helpers';

interface HeaderProps {
  id: string;
}

const Header: FC<HeaderProps> = ({ id }) => {
  const [isFill, setIsFill] = useState(getSelectedStatus(id));
  const handleSelectClick = (): void => {
    changeIsSelected(id);
    setIsFill(!isFill);
  };
  return (
    <header className="text-dark flex justify-between border-b-[1px] border-dark/20 md:flex-col md:border-none">
      <div className="text-[28px] pb-2 font-bold md:border-b-[1px] md:border-dark/20">
        Job Details
      </div>
      <div className="font-normal text-lg flex sm:mt-6 sm:mb-8">
        <div className="flex items-center">
          <BookmarkIcon
            isFill={isFill}
            onClick={handleSelectClick}
            className="cursor-pointer sm:hidden"
          />
          <img
            className="mr-2 hover:cursor-pointer hidden sm:block"
            src={saveStarIcon}
            alt="saveStarIcon"
          />
          <span className="ml-4 mr-8 sm:ml-0 md:text-base">
            Save to my list
          </span>
        </div>
        <div className="flex items-center">
          <img
            className="mr-2 hover:cursor-pointer md:mr-1 sm:mr-0"
            src={frameIcon}
            alt="frameIcon"
          />
          <span className="md:text-base text-right">Share</span>
        </div>
      </div>
    </header>
  );
};

export { Header };
