import { FC } from 'react';

import { Pagination, JobItem } from '../components';
import { useAppSelector } from '../hooks/store/store.hooks';
import { useGetJobsListQuery } from '../store/queries/jobs';
import { selectJobs } from '../store/selectors/current-jobs';

const JobsPage: FC = () => {
  const { isLoading, isError } = useGetJobsListQuery('');

  const currentJobs = useAppSelector(selectJobs);

  if (isLoading) return <div>isLoading</div>;
  if (isError) return <div>isError</div>;
  return (
    <>
      <div className="container">
        {currentJobs.map((job) => (
          <JobItem key={job.id} job={job} />
        ))}
      </div>
      <Pagination />
    </>
  );
};

export { JobsPage };
