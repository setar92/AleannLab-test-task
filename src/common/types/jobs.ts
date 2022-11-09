interface IJob {
  id: string;
  name: string;
  email: string;
  phone: string;
  title: string;
  salary: string;
  address: string;
  benefits: string[];
  location: {
    lat: number;
    long: number;
  };
  pictures: string[];
  createdAt: Date;
  updatedAt: Date;
  description: string;
  employment_type: string[];
}

type JobsState = {
  jobs: IJob[];
  currentPage: number;
  jobsPerPage: number;
  totalPages: number;
};

export type { IJob, JobsState };
