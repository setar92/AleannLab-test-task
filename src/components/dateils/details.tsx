import { FC } from 'react';

import { DarkButton } from '..';
import { Header } from './header';

const Details: FC = () => {
  return (
    <div className="w-[60%] p-4 md:w-[100%]">
      <Header />
      <div className="mt-10 sm:hidden">
        <DarkButton
          onClick={(): void => console.log('aplly now')}
          text={'aplly now'}
        />
      </div>
      <div>Details</div>
    </div>
  );
};

export { Details };
