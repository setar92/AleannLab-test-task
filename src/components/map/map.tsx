import { FC, useCallback, useRef } from 'react';
import { useParams } from 'react-router-dom';

import { GoogleMap } from '@react-google-maps/api';

import { MyMarker } from '..';
import { ICoordinates } from '../../common/types';
import { useAppSelector } from '../../hooks/store/store.hooks';
import { defaultOptions } from './options';

const Map: FC = () => {
  const { jobs } = useAppSelector((state) => state.jobsList);
  const { id } = useParams();
  const job = jobs.find((job) => job.id === id);

  const position: ICoordinates = {
    lat: job?.location.lat,
    lng: job?.location.long,
  } as ICoordinates;

  const mapRef = useRef<google.maps.Map | undefined>(undefined);
  const onLoad = useCallback((map: google.maps.Map) => {
    mapRef.current = map;
  }, []);

  const onUnmount = useCallback((_: google.maps.Map) => {
    mapRef.current = undefined;
  }, []);

  return (
    <>
      {job && (
        <div className="">
          <GoogleMap
            mapContainerClassName="w-[400px] h-[436px] rounded-lg xl:w-[350px] xl:h-[400px] sm:w-auto sm:h-[436px]"
            center={position}
            zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}
            options={defaultOptions}
          >
            <MyMarker position={position} />
          </GoogleMap>
        </div>
      )}
    </>
  );
};

export { Map };
