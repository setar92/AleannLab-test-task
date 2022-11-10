import { FC } from 'react';
// import { useParams } from 'react-router-dom';

// import { IJob } from '../common/types';
import { Details } from '../components';
// import { useAppSelector } from '../hooks/store/store.hooks';
// import { useJsApiLoader } from '@react-google-maps/api';

// import { ICoordinates } from '../common/types';
// import mockJobsJson from '../mock-data/mock-jobs.json';

const DetailesPage: FC = () => {
  // const { isLoaded } = useJsApiLoader({
  //   id: 'google-map-script',
  //   googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP as string,
  // });

  // const { jobs } = useAppSelector((state) => state.jobsList);
  // const { id } = useParams();
  // const job = jobs.find((job) => job.id === id) as IJob;
  // const position: ICoordinates = {
  //   lat: job?.location.lat,
  //   lng: job?.location.long,
  // } as ICoordinates;

  return (
    <div className="bg-white w-[100wh]">
      <Details />
      {/* {isLoaded ? <Map position={position} /> : <div>Loading..</div>}
      <p>details id: {id}</p> */}
    </div>
  );
};

export { DetailesPage };
