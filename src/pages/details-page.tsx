import { FC } from 'react';

import { useJsApiLoader } from '@react-google-maps/api';

import { Details, Map } from '../components';

const DetailesPage: FC = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP as string,
  });

  return (
    <div className="bg-white w-[100wh] py-9 px-8 flex justify-center lg:flex-col sm:px-4 sm:pt-6">
      <Details />
      <div className="hidden text-[28px] pb-2 text-dark font-bold border-b-[1px] border-dark/20 lg:block mb-5 mt-16">
        Contacts
      </div>
      {isLoaded ? <Map /> : <div>Loading...</div>}
    </div>
  );
};

export { DetailesPage };
