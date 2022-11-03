import { FC } from 'react';

import { IJob } from '../common/types';

interface JobItemProps {
  job: IJob;
}

const JobItem: FC<JobItemProps> = ({ job }) => {
  return (
    <div>
      <h3 className="mb-2">{job.title}</h3>
      <hr />
      <p>{job.description}</p>
    </div>
  );
};

export { JobItem };
