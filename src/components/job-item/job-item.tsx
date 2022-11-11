import { FC, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import uuid from 'react-uuid';

import { locationIcon, BookmarkIcon, RateStarIcon } from '../../assets';
import { AppRoute } from '../../common/enums';
import { IJob } from '../../common/types';
import { getDaysBefore, getRandomNumber } from '../../helpers';

interface JobItemProps {
  job: IJob;
}

const JobItem: FC<JobItemProps> = ({ job }) => {
  const img = `${job.pictures[0]}?id=${job.id}`;
  const rate = useMemo(() => {
    return getRandomNumber(3, 5);
  }, []);

  const [isBookmarkFill, setIsBookmarkFill] = useState(false);
  const handleBookmarkClick = (): void => {
    setIsBookmarkFill(!isBookmarkFill);
  };
  const navigate = useNavigate();
  const handleClick = (): void => {
    navigate(`${AppRoute.DETAILS}/${job.id}`);
  };
  return (
    <div className="w-[100%] flex py-6 px-4 bg-white mb-2 rounded-lg drop-shadow-md md:py-3 md:px-2 sm:px-4 sm:pb-7 sm:h-[206px] sm:bg-cardFon">
      <div className="mr-6 md:mr-2 sm:pt-8 sm:mr-5">
        <div className="w-[85px] h-[85px]">
          <img
            className="w-[85px] h-[85px] rounded-full"
            src={img}
            alt="logo"
          />
        </div>
      </div>
      <div className="flex grow sm:flex-col-reverse">
        <div className="h-[116px] grow">
          <div
            className="pb-1.5 h-[56px] font-bold overflow-clip text-xl text-dark mb-2 hover:cursor-pointer md:text-lg hover:underline sm:font-normal"
            onClick={handleClick}
          >
            {job.title}
          </div>
          <div className="mb-2 text-grayText overflow-clip max-h-6">
            Address <span className=" text-sm">&#128900;</span> {job.address}
          </div>
          <div className="flex text-grayText overflow-clip">
            <img className="mr-2" src={locationIcon} alt="locationIcon" />
            <span>
              {job.location.lat.toFixed(5) +
                ', ' +
                job.location.long.toFixed(5)}
            </span>
          </div>
        </div>
        <div className="flex self-end md:flex-col md:justify-between md:h-[116px] sm:flex-row sm:grow sm:h-auto sm:self-auto sm:pt-1 sm:mb-4">
          <div className="min-w-[154px] flex items-center px-8 justify-start md:justify-end md:px-0 sm:items-start sm:justify-start sm:min-w-max sm:pt-1">
            {new Array(rate).fill('').map(() => (
              <RateStarIcon key={uuid()} />
            ))}
          </div>
          <div className="flex h-[116px] flex-col justify-between items-end truncate md:h-auto">
            <div className="px-2 py-1 md:hidden">
              <BookmarkIcon
                isFill={isBookmarkFill}
                onClick={handleBookmarkClick}
                className="cursor-pointer"
              />
            </div>
            <div className="font-normal text-base text-gray text-right md:text-sm md:leading-4">
              Posted {getDaysBefore(job.createdAt)} days ago
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { JobItem };
