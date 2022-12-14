import { FC } from 'react';

import { Pagination, JobItem, Loader, ErrorToast } from '../components';
import { useAppSelector } from '../hooks/store/store.hooks';
import { useGetJobsListQuery } from '../store/queries/jobs';
import { selectJobs } from '../store/selectors/current-jobs';

const JobsPage: FC = () => {
  const { isLoading, isError, error } = useGetJobsListQuery('');

  const currentJobs = useAppSelector(selectJobs);

  if (isLoading) return <Loader />;
  if (isError) return <ErrorToast message={JSON.stringify(error)} />;
  return (
    <div className="bg-[#E6E9F2] flex flex-col justify-between  items-center min-h-[calc(100vh-164px)] pt-6 px-6 w-[100%] md:px-2 md:pt-2">
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
