import Project from "../definitions/project";
import { PERSONAL_WEBSITE_URL } from "./url";

export const MY_PUBLICATIONS: Project[] = [
  {
    name: "Traffic-Based Air Pollution Monitoring System for Urban Intersections",
    url: "https://ieeexplore.ieee.org/document/11270771",
    description:
      "Presented at IEEE-ICECS 2025, this paper details the development of a comprehensive air pollution monitoring system that integrates IoT devices, real-time data visualization, and advanced vehicle tracking algorithms to assess and mitigate urban air quality issues.",
    tags: ["IEEE", "Research Paper", "Air Pollution", "IoT", "Digital Twin"],
    startDate: new Date("2024-08"),
    endDate: new Date("2025-11"),
    isArchived: true,
    isFeatured: true,
  },
];

export const MY_PROJECTS: Project[] = [
  {
    name: "Automatic Smoke Observer",
    url: "https://github.com/fxs1l/Automatic-Smoke-Observer",
    videoUrl: "www.youtube.com/watch?v=cfjgM5uVEug",
    description:
      "A remote monitoring and alerting system for forest fires mitigation, which was built with a Raspberry Pi equipped with smoke sensors and a camera. Trained and integrated a YOLOv5 model for fire and smoke detection through images. Gold awardee at the Malaysia Technology Expo 2021.",
    tags: ["Python", "Raspberry Pi", "Arduino", "YOLOv5", "OpenCV"],
    startDate: new Date("2021-02-01"),
    endDate: new Date("2021-06-01"),
    isArchived: true,
    isFeatured: true,
  },
  {
    name: "Personal Portfolio",
    description:
      "My personal portfolio website built with Next.js, Tailwind CSS, and animated with Framer Motion. ",
    url: PERSONAL_WEBSITE_URL,
    tags: ["ReactJs", "NextJs", "Tailwind"],
    startDate: new Date("2024-09-23"),
    endDate: new Date(),
    isFeatured: true,
  },
  {
    name: "Personal Portfolio (v1)",
    description:
      "Personal portfolio built with only native React modules and pure CSS. It started out as a simple project to learn React.",
    url: "https://v1.asilacas.io",
    tags: ["ReactJs", "CSS/Sass"],
    startDate: new Date("2024-03-01"),
    endDate: new Date("2024-09-23"),
    isArchived: true,
  },

  {
    name: "Linux Dotfiles",
    tags: ["Shell", "Linux", "Bash", "CSS"],
    url: "https://github.com/fxs1l/dotfiles",
    description:
      "Personal dotfiles for my Linux desktop. Includes custom scripts, themes, and configurations. Ready for copy-paste.",
    startDate: new Date("2020-01"),
    endDate: new Date(),
    isActive: true,
  },
  {
    name: "Palanca Automation Bot",
    tags: ["Javascript", "Google Script"],
    url: "https://github.com/fxs1l/Palanca-Automation-Bot",
    startDate: new Date("2021-05"),
    endDate: new Date("2021-05"),
    description: "A GoogleScript based Palanca letter sender.",
  },
  {
    name: "Hayahay",
    tags: ["Flutter", "Python", "Firebase", "IoT"],
    url: "https://github.com/fxs1l/Hayahay",
    isFeatured: true,
    startDate: new Date("2021-04"),
    endDate: new Date("2021-06"),
    description:
      "An IoT-based home automation system for controlling lights, fans, and other appliances. Interfaced sensor components with ESP32 microcontrollers and controlled them through a Flutter app. Built backend services with Firebase and Python.",
  },
  {
    name: "Buoywatch",
    tags: ["Python", "OpenCV", "Tensorflow", "YOLOv5"],
    url: "https://github.com/fxs1l/Buoywatch",
    isFeatured: true,
    startDate: new Date(2021, 6, 1),
    endDate: new Date(2021, 6, 1),
    description:
      "A buoy-based system that detects and reports illegal fishing. Trained and integrated a YOLOv5 model for fishing vessel image detection. Built as an entry for the 2021 Karagatan Hackathon.",
  },
];

export const ACADEMIC_PROJECTS: Project[] = [
  {
    name: "Traffic-Based Air Pollution Monitoring System for Urban Intersections ",
    tags: ["Python", "YOLOv5", "OpenCV", "Raspberry Pi", "NodeJs", "NextJs"],
    url: "https://traffic.upcare.live",
    isFeatured: false,
    startDate: new Date("2024-08"),
    endDate: new Date("2025-05"),
    description:
      "Capstone project for my Electronics Engineering degree at UPD, recognized among the department’s Top 10 Best in Design and selected for presentation at IEEE-ICECS 2025. Developed a responsive NextJS web app to visualize real-time air pollution and traffic data via a 3D digital twin, alongside a CoAP server in NodeJS for IoT data ingestion and a Python-based vehicle tracking system using YOLO and BoT-SORT.",
  },
  {
    name: "StegaCipher",
    tags: ["Python", "Python/PIL"],
    url: "https://github.com/fxs1l/EEE-111-StegaCipher",
    startDate: new Date("2021-01"),
    endDate: new Date("2021-01"),
    description:
      "Basic steganography which encodes and decodes encrypted messages into an image by using a caesar cipher",
  },
  {
    name: "Mandala Generator",
    tags: ["Python"],
    url: "https://github.com/fxs1l/EEE-111-Mandala-Generator",
    startDate: new Date("2021-01"),
    endDate: new Date("2021-01"),
    description: "Generates a mandala based on predefined classes.",
  },
  {
    name: "Shortest Path Algorithm Cost Comparison",
    tags: ["Python"],
    url: "https://github.com/fxs1l/EEE-121-Shortest-Path",
    startDate: new Date("2022-01"),
    endDate: new Date("2022-01"),
    description:
      "Given different scenarios, compares the cost between Djikstra's and Prim's algorithm",
  },
  {
    name: "Computer Networks Laboratory",
    tags: ["Networking", "LAMP", "WordPress", "Wireshark", "GNS3", "Routing"],
    startDate: new Date("2024-08"),
    endDate: new Date("2024-12"),
    description:
      "Configured and hosted a WordPress instance using the LAMP stack on a virtual machine. Dissected protocol data units using Wireshark. Performed IPv4 addressing and routing in GNS3 and on physical routers.",
  },
  {
    name: "Cloud Computing Laboratory",
    tags: ["Cloud", "Oracle Cloud", "Virtualization", "VM", "Infrastructure"],
    startDate: new Date("2024-01"),
    endDate: new Date("2024-07"),
    description:
      "Configured and hosted a Virtual Machine (VM) in Oracle Cloud for lab testing and deployment. Gained hands-on experience in cloud infrastructure, virtualization concepts, and VM lifecycle management.",
  },
  {
    name: "Landslide Alerting and Monitoring System",
    tags: ["IoT", "ESP32", "C++", "ThingSpeak", "Google Sites"],
    startDate: new Date("2024-02"),
    endDate: new Date("2024-08"),
    description:
      "Designed and implemented an IoT-based landslide alerting system as part of laboratory coursework. Programmed ESP32 microcontrollers in C++ to collect vibration, acceleration, and soil moisture data and upload readings to ThingSpeak via REST APIs. Integrated ThingSpeak data to a Google Sites dashboard for real-time visualization and backup monitoring, and established alert conditions for manual incident review.",
  },
];
