import { FC } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { ApplyButton, ReturnButton } from '..';
import { AppRoute } from '../../common/enums';
import { useAppSelector } from '../../hooks/store/store.hooks';
import { useGetJobsListQuery } from '../../store/queries/jobs';
import {
  Title,
  Header,
  Descriptions,
  AdditionalInfo,
  AttechedImgs,
} from './details-components';

const Details: FC = () => {
  const { isLoading, isError } = useGetJobsListQuery('');
  const { jobs } = useAppSelector((state) => state.jobsList);
  const { id } = useParams();
  const navigate = useNavigate();

  const job = jobs.find((job) => job.id === id);
  const handleReturn = (): void => {
    navigate(AppRoute.JOBS);
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>isError</div>;

  return (
    <div className="w-[60%] px-48 py-14 md:w-[100%]">
      <Header />
      <div className="mt-10 mb-8 sm:hidden">
        <ApplyButton
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
        <ApplyButton
          onClick={(): void => console.log('aplly now')}
          text={'aplly now'}
        />
      </div>
      {job && (
        <div className="flex flex-col sm:flex-col-reverse">
          <AdditionalInfo
            employments={job?.employment_type}
            benefits={job?.benefits}
          />
          <AttechedImgs imgs={job.pictures} />
        </div>
      )}
      <div className="mt-24 ml-[-90px] sm:hidden">
        <ReturnButton onClick={handleReturn} text="return to job board" />
      </div>
    </div>
  );
};

export { Details };
