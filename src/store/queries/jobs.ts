import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { IJob } from '../../common/types';
import { setJobs } from '../jobs/slice';

const jobsApi = createApi({
  reducerPath: 'jobsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL,
    prepareHeaders: (headers, _) => {
      const token = process.env.REACT_APP_API_TOKEN;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getJobsList: builder.query<IJob[], string>({
      query: () => '',
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        const { data } = await queryFulfilled;
        dispatch(setJobs({ jobs: data }));
      },
    }),
  }),
});

export const { useGetJobsListQuery } = jobsApi;
export { jobsApi, setJobs };
