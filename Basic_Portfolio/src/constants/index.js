import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  project_1,
  jobit,
  tripguide,
  website,
} from "../assets";

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Java Developer Intern",
    company_name: "Cipheren Technology LLP",

    date: "Feb 2024 - Mar 2024",
    points: [
      "Gained hands-on experience in developing and maintaining Java applications.",
      "Participated in debugging and performance optimization of Java programs.",
      "Involved in the entire Software Development Lifecycle (SDLC) – from requirement analysis to deployment.",
      "Worked with tools such as Eclipse/IntelliJ, Git, and Maven for project development.",
    ],
  },
];

const projects = [
  {
    name: "Disney+ UI Clone",
    description:
      "This project is a Disney+ UI Clone built using React.js and Tailwind CSS, designed to closely replicate the look and feel of the original platform. It features Firebase Authentication with Google Sign-In, allowing users to securely log in. The UI includes an interactive viewer section where hovering over thumbnails plays short video previews. The app is fully responsive and optimized for various screen sizes. It is deployed using Firebase Hosting. ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
    ],
    image: project_1,
    source_code_link: "https://github.com/Roshankiller123/DisneyPlus_Ui_Clone",
    page_link: "https://disneyplus-clone-1e057.firebaseapp.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
    page_link: "",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
    page_link: "",
  },
];

export { services, technologies, experiences, projects };
