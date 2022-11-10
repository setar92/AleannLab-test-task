import { FC } from 'react';
import { useParams } from 'react-router-dom';

import { DarkButton } from '..';
import { useAppSelector } from '../../hooks/store/store.hooks';
import { useGetJobsListQuery } from '../../store/queries/jobs';
import { AdditionalInfo } from './additional-info';
import { Descriptions } from './descriptions';
import { Header } from './header';
import { Title } from './title';

const Details: FC = () => {
  const { isLoading, isError } = useGetJobsListQuery('');

  const { jobs } = useAppSelector((state) => state.jobsList);
  const { id } = useParams();

  const job = jobs.find((job) => job.id === id);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>isError</div>;

  return (
    <div className="w-[60%] p-14 md:w-[100%]">
      <Header />
      <div className="mt-10 mb-8 sm:hidden">
        <DarkButton
          onClick={(): void => console.log('aplly now')}
          text={'aplly now'}
        />
      </div>
      {job && (
        <Title
          title={job?.title}
          salary={job?.salary}
          createdAt={job?.createdAt}
        />
      )}
      {job && <Descriptions descriptions={job.description} />}
      <div className="mt-10 sm:flex sm:justify-center sm:mb-36">
        <DarkButton
          onClick={(): void => console.log('aplly now')}
          text={'aplly now'}
        />
      </div>
      {job && (
        <AdditionalInfo
          employments={job?.employment_type}
          benefits={job?.benefits}
        />
      )}
    </div>
  );
};

export { Details };
