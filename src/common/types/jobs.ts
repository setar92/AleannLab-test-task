interface IJob {
  id: string;
  name: string;
  email: string;
  phone: string;
  title: string;
  salary: string;
  adress: string;
  benefits: string[];
  location: {
    lat: number;
    long: number;
  };
  pictures: string[];
  createdAt: FormData;
  updatedAt: FormData;
  description: string;
  employment_type: string[];
}

interface JobsState {
  jobs: IJob[];
}

export type { IJob, JobsState };
