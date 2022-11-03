import { FC } from 'react';

import { JobItem } from '../components/job-item';
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
        <JobItem key={job.id} job={job} />
      ))}
    </div>
  );
};

export { JobsPage };
