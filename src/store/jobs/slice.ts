import { createSlice } from '@reduxjs/toolkit';

import { JobsState } from '../../common/types';

const initialState: JobsState = {
  jobs: [],
  currentPage: 1,
  jobsPerPage: 5,
  totalPages: 0,
};

const { reducer, actions } = createSlice({
  name: 'jobslist',
  initialState,
  reducers: {
    setJobs: (state, action) => {
      const { jobs } = action.payload;
      state.jobs = [...state.jobs, ...jobs];
      const totalPages = Math.ceil(jobs.length / state.jobsPerPage);
      state.totalPages = totalPages;
    },
    setCurrentPage: (state, action) => {
      const currentPage = action.payload;
      state.currentPage = currentPage;
    },
  },
  extraReducers: {},
});

export const { setJobs, setCurrentPage } = actions;
export { reducer };
