import { FC } from 'react';

import { useAppSelector } from '../hooks/store/store.hooks';
import { useGetJobsListQuery } from '../store/queries/jobs';

const JobsPage: FC = () => {
  const { isLoading, isError } = useGetJobsListQuery('');
  const { jobs } = useAppSelector((store) => store.jobs);

  if (isLoading) return <div>isLoading</div>;
  if (isError) return <div>isError</div>;

  return (
    <div>
      {jobs.map((job) => (
        <div>--{job.title}</div>
      ))}
    </div>
  );
};

export { JobsPage };
