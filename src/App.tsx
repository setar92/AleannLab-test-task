import React, { FC } from 'react';
import { Provider } from 'react-redux';

import { useJsApiLoader } from '@react-google-maps/api';

import { Map } from './components';
import { Routing } from './navigation/routing/routing';
import { store } from './store/store';

const App: FC = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP as string,
  });

  return (
    <React.StrictMode>
      <Provider store={store}>
        {isLoaded ? <Map /> : <div>Loading..</div>}
        <Routing />
      </Provider>
    </React.StrictMode>
  );
};

export { App };
