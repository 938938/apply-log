export type ApplicationStatus = '지원' | '과제' | '면접' | '합격' | '탈락';

export type Application = {
  id: string;
  companyName: string;
  status: ApplicationStatus;
  appliedAt: string;
  position?: string;
  jobPostUrl?: string;
  memo?: string;
};
