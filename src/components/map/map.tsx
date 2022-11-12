import { FC, useCallback, useRef } from 'react';
import { useParams } from 'react-router-dom';

import { GoogleMap } from '@react-google-maps/api';

import { MyMarker } from '..';
import { locationMapIcon } from '../../assets';
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
    <div className="w-[400px] h-[436px] rounded-lg xl:w-[350px] xl:h-[400px] sm:w-auto sm:h-[436px]">
      <div className="w-[400px] h-[218px] rounded-t-lg xl:w-[350px] xl:h-[200px] sm:w-auto sm:h-[218px] bg-[#2A3047] flex flex-col px-16 pt-8">
        <div className="text-[#E7EAF0] font-bold capitalize text-xl sm:text-base">
          Name: {' ' + job?.name}.
        </div>
        <div className="mt-2 flex">
          <img
            className="mr-2 pb-[6px]"
            src={locationMapIcon}
            alt="locationIcon"
          />
          <span className="text-[#E8EBF3] text-lg sm:text-base">
            {job?.address}
          </span>
        </div>
        <span className="text-[#E8EBF3] text-lg sm:text-base mt-2 sm:text-white/70">
          {job?.phone},
        </span>
        <span className="text-[#E8EBF3] text-lg sm:text-base mt-2 sm:text-white/70">
          {job?.email}
        </span>
      </div>
      {job && (
        <GoogleMap
          mapContainerClassName="w-[400px] h-[218px] rounded-b-lg xl:w-[350px] xl:h-[200px] sm:w-auto sm:h-[218px]"
          center={position}
          zoom={10}
          onLoad={onLoad}
          onUnmount={onUnmount}
          options={defaultOptions}
        >
          <MyMarker position={position} />
        </GoogleMap>
      )}
    </div>
  );
};

export { Map };
