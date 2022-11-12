import { createSelector } from '@reduxjs/toolkit';

import { JobsState } from '../../common/types';

const selectJobs = createSelector(
  [(state): JobsState => state.jobsList],
  (jobsList) => {
    const { jobs, currentPage, jobsPerPage } = jobsList;

    const indexOfLastJob = currentPage * jobsPerPage;
    const indexOfFirstJob = indexOfLastJob - jobsPerPage;
    const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);

    return currentJobs;
  },
);

export { selectJobs };
