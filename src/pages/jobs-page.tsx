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
    <div className="bg-[#E6E9F2] flex justify-between flex-col items-center min-h-[calc(100vh-165px)] pt-6 px-6 w-[100%]">
      <div className="w-[100%]">
        {currentJobs.map((job) => (
          <JobItem key={job.id} job={job} />
        ))}
      </div>
      <Pagination />
    </div>
  );
};

export { JobsPage };
