import { FC } from 'react';

import { Pagination, JobItem, Loader } from '../components';
import { useAppSelector } from '../hooks/store/store.hooks';
import { useGetJobsListQuery } from '../store/queries/jobs';
import { selectJobs } from '../store/selectors/current-jobs';

const JobsPage: FC = () => {
  const { isLoading, isError } = useGetJobsListQuery('');

  const currentJobs = useAppSelector(selectJobs);

  if (isLoading) return <Loader />;
  if (isError) return <div>isError</div>;
  return (
    <div className="bg-[#E6E9F2] flex flex-col justify-between  items-center min-h-[calc(100vh-165px)] pt-6 px-6 w-[100%]">
      <div className="w-[100%] flex flex-col items-center">
        {currentJobs.map((job) => (
          <JobItem key={job.id} job={job} />
        ))}
      </div>
      <Pagination />
    </div>
  );
};

export { JobsPage };
