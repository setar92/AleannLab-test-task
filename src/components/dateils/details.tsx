import { FC } from 'react';

import { Header } from './header';

const Details: FC = () => {
  return (
    <div className="w-[60%] p-4 md:w-[100%]">
      <Header />
      <div>Details</div>
    </div>
  );
};

export { Details };
