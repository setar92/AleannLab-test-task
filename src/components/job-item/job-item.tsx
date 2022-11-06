import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { starIcon, BookmarkIcon } from '../../assets';
import { AppRoute } from '../../common/enums';
import { IJob } from '../../common/types';

interface JobItemProps {
  job: IJob;
}

const JobItem: FC<JobItemProps> = ({ job }) => {
  const [isBookmarkFill, setIsBookmarkFill] = useState(false);
  const handleBookmarkClick = (): void => {
    setIsBookmarkFill(!isBookmarkFill);
  };
  const navigate = useNavigate();
  const handleClick = (): void => {
    navigate(`${AppRoute.DETAILS}/${job.id}`);
  };
  return (
    <div className="flex py-6 px-4">
      <div>{job.pictures[0]}</div>
      <div className=" w-[960px] h-[116px] bg-amber-300" onClick={handleClick}>
        {job.title}
      </div>
      <div className=" flex align-middle">
        <img src={starIcon} alt="starIcon" width="20px" height="20px" />
        <img src={starIcon} alt="starIcon" width="20px" height="20px" />
        <img src={starIcon} alt="starIcon" width="20px" height="20px" />
        <img src={starIcon} alt="starIcon" width="20px" height="20px" />
        <img src={starIcon} alt="starIcon" width="20px" height="20px" />
      </div>
      <div>
        <div>
          <BookmarkIcon isFill={isBookmarkFill} onClick={handleBookmarkClick} />
        </div>
        <div> Posted 3 days</div>
      </div>
    </div>
  );
};

export { JobItem };
