import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { starIcon, locationIcon, BookmarkIcon } from '../../assets';
import { AppRoute } from '../../common/enums';
import { IJob } from '../../common/types';
import { getDaysBefore, getRandomNumber } from '../../helpers';

interface JobItemProps {
  job: IJob;
}

const JobItem: FC<JobItemProps> = ({ job }) => {
  const img = `${job.pictures[0]}?id=${job.id}`;
  const [isBookmarkFill, setIsBookmarkFill] = useState(false);
  const handleBookmarkClick = (): void => {
    setIsBookmarkFill(!isBookmarkFill);
  };
  const navigate = useNavigate();
  const handleClick = (): void => {
    navigate(`${AppRoute.DETAILS}/${job.id}`);
  };
  return (
    <div className="flex py-6 px-4 bg-white mb-2 rounded-lg">
      {/* logo */}
      <div className="mr-6">
        <div className="w-[85px] h-[85px]">
          <img
            className="w-[85px] h-[85px] rounded-full"
            src={img}
            alt="logo"
          />
        </div>
      </div>
      {/* main information */}
      {/* <div className="flex"> */}
      <div className="h-[116px] grow">
        <div
          className="pb-1.5 h-[56px] font-bold overflow-clip text-xl text-dark/75 mb-2 hover:cursor-pointer"
          onClick={handleClick}
        >
          {job.title}
        </div>
        <div className="mb-2 text-grayText overflow-clip max-h-6">
          Address <span className=" text-sm">&#128900;</span> {job.address}
        </div>
        <div className="flex text-grayText">
          <img className="mr-2" src={locationIcon} alt="locationIcon" />
          <span>{job.location.lat + ', ' + job.location.long}</span>
        </div>
      </div>
      {/* rate */}
      <div className="flex self-end">
        <div className="min-w-[154px] flex items-center px-8 justify-start">
          {new Array(getRandomNumber(3, 5)).fill('').map((it, index) => (
            <img
              key={index}
              src={starIcon}
              alt="starIcon"
              className="w-4 h-4 sm:w-2.5 sm:h-2.5"
            />
          ))}
        </div>

        <div className="flex h-[116px] flex-col min-w-[160px] justify-between items-end truncate md:min-w-[120px]">
          <div className="px-2 py-1 sm:hidden">
            <BookmarkIcon
              isFill={isBookmarkFill}
              onClick={handleBookmarkClick}
            />
          </div>
          <div className="font-normal text-base text-gray text-right">
            Posted {getDaysBefore(job.createdAt)} days ago
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export { JobItem };
