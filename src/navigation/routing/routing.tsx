import { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { AppRoute } from '../../common/enums/path-enum';
import { DetailesPage, JobsPage } from '../../pages';

const Routing: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.JOBS} element={<JobsPage />} />
        <Route path={AppRoute.DETAILS + '/:id'} element={<DetailesPage />} />
        <Route path={AppRoute.NOT_FOUND} element={<JobsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export { Routing };
