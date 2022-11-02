import { createSlice } from '@reduxjs/toolkit';

import { JobsState } from '../../common/types';

const initialState: JobsState = {
  jobs: [],
};

const { reducer, actions } = createSlice({
  name: 'jobs',
  initialState,
  reducers: {
    setJobs: (state, action) => {
      const { jobs } = action.payload;
      state.jobs = jobs;
    },
  },
  extraReducers: {},
});

export const { setJobs } = actions;
export { reducer };
