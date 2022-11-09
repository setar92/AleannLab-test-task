import { FC, useCallback, useRef } from 'react';

import { GoogleMap } from '@react-google-maps/api';

import { MyMarker } from '..';
import { ICoordinates } from '../../common/types';
import { defaultOptions, containerStyle } from './options';

interface MapProps {
  position: ICoordinates;
}

const Map: FC<MapProps> = ({ position }) => {
  const mapRef = useRef<google.maps.Map | undefined>(undefined);
  const onLoad = useCallback((map: google.maps.Map) => {
    mapRef.current = map;
  }, []);

  const onUnmount = useCallback((_: google.maps.Map) => {
    mapRef.current = undefined;
  }, []);

  return (
    <div>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={position}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={defaultOptions}
      >
        <MyMarker position={position} />
      </GoogleMap>
    </div>
  );
};

export { Map };
