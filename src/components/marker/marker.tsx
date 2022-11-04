import { FC } from 'react';

import { MarkerF } from '@react-google-maps/api';

import { ICoordinates } from '../../common/types';

interface MyMarkerProps {
  position: ICoordinates;
}

const MyMarker: FC<MyMarkerProps> = ({ position }) => {
  return (
    <MarkerF
      position={position}
      icon={{
        url: '/Location.svg',
      }}
    />
  );
};

export { MyMarker };
