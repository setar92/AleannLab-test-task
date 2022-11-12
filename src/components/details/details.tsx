import { FC } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { ApplyButton, ErrorToast, Loader, ReturnButton } from '..';
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
  const navigate = useNavigate();
  const { isLoading, isError, error } = useGetJobsListQuery('');

  const { jobs } = useAppSelector((state) => state.jobsList);
  const { id } = useParams();
  const job = jobs.find((job) => job.id === id);

  const handleReturn = (): void => {
    navigate(AppRoute.JOBS);
  };

  const handleApply = (): void => {
    console.log('aplly now logic');
  };

  if (isLoading) return <Loader />;
  if (isError) return <ErrorToast message={JSON.stringify(error)} />;

  return (
    <div className="max-w-[720px] mr-32 lg:max-w-[100%] lg:mr-0 xl:mr-20">
      <Header id={id as string} />
      <div className="mt-10 mb-8 sm:hidden">
        <ApplyButton onClick={handleApply} text={'aplly now'} />
      </div>
      {job && (
        <Title
          title={job?.title}
          salary={job?.salary}
          createdAt={job?.createdAt}
        />
      )}
      {job && <Descriptions descriptions={job.description} />}
      <div className="mt-10 sm:flex sm:justify-center">
        <ApplyButton onClick={handleApply} text={'aplly now'} />
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
      <div className="mt-24 mb-32 ml-[-90px] xl:ml-0 lg:mb-12 md:hidden  ">
        <ReturnButton onClick={handleReturn} text="return to job board" />
      </div>
    </div>
  );
};

export { Details };
