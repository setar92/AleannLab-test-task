import { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { AppRoute } from '../../common/enums/path-enum';
import { DetailesPage, JobsPage } from '../../pages';

const Routing: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.JOBS} element={<JobsPage />} />
        <Route path={AppRoute.DETAILS} element={<DetailesPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export { Routing };
