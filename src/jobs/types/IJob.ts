export interface JobManifest {
  name: string;
  description: string;
  version: string;
  author: string;
}

export interface IJob {
  readonly name: string;
  readonly manifest: JobManifest | null;
  init(): void;
}

export enum JobSide {
  CLIENT = 'client',
  SERVER = 'server',
  SHARED = 'shared',
}
