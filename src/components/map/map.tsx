import { FC, useCallback, useState } from 'react';

import { GoogleMap } from '@react-google-maps/api';

import { defaultTheme } from './theme';

const center = {
  lat: -3.745,
  lng: -38.523,
};

const containerStyle = {
  width: '400px',
  height: '400px',
  // marginBottom: '-20px',
  // zIndex: '-1',
};

const defaultOptions = {
  panControl: true,
  zoomControl: false,
  mapTypeControl: false,
  scaleControl: false,
  streetViewControl: false,
  rotateControl: false,
  clickableIcons: false,
  keyboardShortcurs: false,
  scrollwheel: true,
  disableDoubleClickZoom: false,
  fullscreenControl: false,
  styles: defaultTheme,
};

const Map: FC = () => {
  const [map, setMap] = useState<google.maps.Map | null>(null);
  console.log(map);
  const onLoad = useCallback((map: google.maps.Map) => {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = useCallback((_: google.maps.Map) => {
    setMap(null);
  }, []);

  return (
    <div>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={defaultOptions}
      ></GoogleMap>
    </div>
  );
};

export { Map };
