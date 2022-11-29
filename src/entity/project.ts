export type File = {
  id: number;
  name: string;
  file_type: string;
};

export type User = {
  id: number;
  name: string;
  email: string;
};

export type Project = {
  id: number;
  name: string;
  start_date: string;
  files: File[];
  users: User[];
};
