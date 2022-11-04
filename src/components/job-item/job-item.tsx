import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { AppRoute } from '../../common/enums';
import { IJob } from '../../common/types';

interface JobItemProps {
  job: IJob;
}

const JobItem: FC<JobItemProps> = ({ job }) => {
  const navigate = useNavigate();
  const handleClick = (): void => {
    navigate(`${AppRoute.DETAILS}/${job.id}`);
  };
  return (
    <div onClick={handleClick}>
      <h3 className="mb-2">{job.title}</h3>
      <hr />
      <p>{job.description}</p>
    </div>
  );
};

export { JobItem };
