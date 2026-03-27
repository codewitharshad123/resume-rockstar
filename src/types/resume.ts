export interface ResumeData {
  personal: {
    fullName: string;
    title: string;
    email: string;
    phone: string;
    location: string;
    summary: string;
  };
  experience: ExperienceItem[];
  education: EducationItem[];
  skills: string[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface EducationItem {
  id: string;
  school: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
}

export const defaultResumeData: ResumeData = {
  personal: {
    fullName: "",
    title: "",
    email: "",
    phone: "",
    location: "",
    summary: "",
  },
  experience: [],
  education: [],
  skills: [],
};
