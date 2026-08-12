import Experience, {
  ExperienceType,
  WorkMode,
} from "../definitions/experience";
import { SYMPH_URL, UP_CIRCUIT_URL, UP_EEEI_URL } from "./url";

export const MY_EXPERIENCES: Experience[] = [
  {
    company: {
      name: "Bank of the Philippine Islands",
      url: "",
    },
    isFeatured: true,
    positions: [
      {
        title: "Data Science — Machine Learning Operations (OJT)",
        description:
          "Automated ModelOps workflows and reusable ML components, reducing manual effort in model development and deployment processes while supporting enterprise-scale analytics and governance initiatives.",
        type: ExperienceType.WORK,
        mode: WorkMode.ONSITE,
        startDate: new Date("2026-05-18"),
      },
      {
        title: "Officership Training Program",
        description:
          "Completed a comprehensive training program focused on leadership development, organizational management, and effective communication. This experience equipped me with essential skills to lead and manage teams successfully.",
        type: ExperienceType.WORK,
        mode: WorkMode.ONSITE,
        startDate: new Date("2026-02-16"),
        endDate: new Date("2026-08-16"),
      },
    ],
  },
  {
    company: {
      name: "Symph",
      url: SYMPH_URL,
    },
    isFeatured: true,
    positions: [
      {
        title: "Web and Mobile App Developer Intern",
        description:
          "Contributed to two projects involving frontend development using NextJs, backend API development with NestJS, and cloud configuration on Google Cloud Platform. This experience enhanced my technical skills and understanding of the web development lifecycle.",
        type: ExperienceType.INTERNSHIP,
        mode: WorkMode.REMOTE,
        startDate: new Date("2024-05-04"),
        endDate: new Date("2024-10-30"),
      },
    ],
  },
  {
    company: {
      name: "UP EEEI",
      url: UP_EEEI_URL,
    },
    isFeatured: true,
    positions: [
      {
        title: "Digital Signal Processing Lab Intern",
        description:
          "Assisted in collecting data from various signal sources such as audio from Philippine native instruments and human vital signs sensor data for research by using Python and MATLAB.",
        type: ExperienceType.INTERNSHIP,
        mode: WorkMode.ONSITE,
        startDate: new Date("2019-06"),
        endDate: new Date("2019-07"),
      },
    ],
  },
  {
    company: {
      name: "UP Circuit",
      url: UP_CIRCUIT_URL,
    },
    positions: [
      {
        title: "Co Director for Competitions and Opportunities",
        description: "Co director for Competions and ",
        type: ExperienceType.VOLUNTEER,
        mode: WorkMode.HYBRID,
        startDate: new Date("2024-05"),
      },
    ],
  },
];
