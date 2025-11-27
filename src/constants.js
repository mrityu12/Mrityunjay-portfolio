// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';


// Experience Section Logo's
import bluestock from "./assets/company_logo/bluestock.jpg";
import skillstoneLogo from './assets/company_logo/skillstone.jpeg';

// Education Section Logo's
import cgcLogo from './assets/education_logo/CGC_Landran.avif';
import bsebLogo from './assets/education_logo/bseb.jpeg';
import bkpsLogo from './assets/education_logo/bkps.png';

// Project Section Logo's
import codingChallengeLogo from './assets/work_logo/coding-challange.png';
import countryExplorerLogo from './assets/work_logo/country Explorer.png';
import healthcareLogo from './assets/work_logo/healthcare.png';
import musifyLogo from './assets/work_logo/musify.webp';
import personalFinanceLogo from './assets/work_logo/PersonalFinanceVisualizer.png';
import voiceAILogo from './assets/work_logo/Voice AI.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'GSAP', logo: gsapLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
    ],
  },
];

 
export const experiences = [
  {
    id: 0,
    img: mysmartgenie,
    role: "SDE Intern",
    company: "mysmartgenie",
    date: "sep 2025 – current",
desc: "Currently working as a PHP Laravel Developer, building end-to-end modules for a School Management & Gatepass System. Responsible for developing secure REST APIs, managing MySQL databases, creating dynamic admin panels, PDF generation, and integrating features like attendance, student records, gatepass workflow, notifications, and reporting. Focused on clean architecture, performance optimization, and scalable backend development."
    skills: [
  "PHP",
  "Laravel",
  "MySQL",
  "REST APIs",
  "Blade Templates",
  "MVC Architecture",
  "Cron Jobs",
  "Error Debugging",
  "Backend Development",
  "Postman API Testing",
],

  },
  {
    id: 1,
    img: bluestock,
    role: "SDE Intern",
    company: "Bluestock Fintech",
    date: "Feb 2025 – Mar 2025",
    desc: "Designed and developed RESTful APIs for an IPO web platform. Built backend components using Node.js, Express, and MongoDB with focus on security and scalability. Worked in Agile sprints with frontend and product teams.",
    skills: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "JavaScript",
      "Agile",
      "Backend Development",
      "Security",
      "Scalability"
    ],
  },
  {
    id: 2,
    img: skillstoneLogo,
    role: "MERN Stack Trainee",
    company: "SkillStone",
    date: "Jan 2025 – May 2025",
    desc: "Built full-stack projects including login systems, task managers, and CRUD dashboards. Implemented JWT authentication and reusable React components. Gained deployment experience and practiced Git workflows.",
    skills: [
      "React.js",
      "Node.js",
      "MongoDB",
      "Express.js",
      "JWT Authentication",
      "JavaScript",
      "Git",
      "Full Stack Development",
      "CRUD Operations"
    ],
  },
];
  
  export const education = [
  {
    id: 1,
    degree: "Bachelor of Technology in Computer Science",
    school: "Chandigarh Group of Colleges (CGC) - Landran",
    date: "2021 - 2025",
    desc: "Focused on software development, data structures, operating systems, computer networks, DBMS, and full-stack web technologies.",
    img: cgcLogo,
  },
  {
    id: 2,
    degree: "Senior Secondary Education (Intermediate - BSEB)",
    school: "Ram Janki Radha Krishn Sharda Inter College, Lagma",
    date: "2018 - 2020",
    desc: "Studied Physics, Chemistry, Mathematics, English, Hindi, and Computer Science.",
    img: bsebLogo,
  },
  {
    id: 3,
    degree: "High School (CBSE X)",
    school: "Bal Kalyan Public School, Binod Vihar, Pali, Ghanshampur, Bihar",
    date: "2018",
    desc: "Subjects included Science, Mathematics, Social Science, English, Hindi, and Computer Applications.",
    img: bkpsLogo,
  }
];
export const projects = [
  {
    id: 0,
    title: "Coding Challenge Platform",
    description:
      "Role-based platform with Google Auth and Firestore security rules. Features admin dashboard with real-time code editor using vue-codemirror. Built for competitive programming and coding assessments.",
    image: codingChallengeLogo, // Using public folder path
    tags: ["Nuxt 3", "Firebase", "Tailwind", "vue-codemirror", "Google Auth"],
    github: "https://github.com/mrityu12/CodeChallenge", // Update with your actual repo
    webapp: "https://github.com/mrityu12/CodeChallenge", // Update with actual link
  },
  {
    id: 1,
    title: "Personal Finance Visualizer",
    description:
      "Visual dashboard for tracking finances with real-time charts and MongoDB backend. Features interactive data visualization using Recharts for comprehensive financial analysis and budgeting.",
    image: personalFinanceLogo
, // Using public folder path
    tags: ["Next.js", "React", "Tailwind", "MongoDB", "Recharts"],
    github: "https://github.com/mrityu12/personal-finance", // Update with your actual repo
    webapp: "https://personal-finance-five-lime.vercel.app/", // Update with actual link
  },
  {
    id: 2,
    title: "Healthcare Dashboard",
    description:
      "Pixel-perfect responsive frontend from Figma design using React and CSS Modules. Static single-page application showcasing modern healthcare interface design and user experience.",
    image: healthcareLogo, // Using import (no spaces in filename)
    tags: ["React SPA", "CSS Modules", "Figma Design", "Responsive"],
    github: "https://github.com/mrityu12/Healthcare-Dashboard", // Update with your actual repo
    webapp: "https://healthcare-dashboard-rho-amber.vercel.app/", // Update with actual link
  },
  {
    id: 3,
    title: "Musify - Music Platform",
    description:
      "Modern music streaming platform interface with clean design and smooth user experience. Features responsive design and interactive elements for music discovery and playback.",
    image: musifyLogo, // Using import (no spaces in filename)
    tags: ["React JS", "CSS3", "Music API", "Responsive Design"],
    github: "https://github.com/mrityu12/Musify", // Update with your actual repo
    webapp: "https://github.com/mrityu12/Musify", // Update with actual link
  },
  {
    id: 4,
    title: "Country Explorer",
    description:
      "Interactive application for exploring countries around the world. Features detailed country information, search functionality, and responsive design for optimal user experience.",
    image: countryExplorerLogo, // Using public folder path (has space)
    tags: ["React JS", "REST API", "JavaScript", "CSS3"],
    github: "https://github.com/mrityu12/Country-Explorer", // Update with your actual repo
    webapp: "https://country-explorer-gray.vercel.app/", // Update with actual link
  },
  {
    id: 5,
    title: "Voice AI Assistant",
    description:
      "AI-powered voice assistant application with speech recognition and natural language processing capabilities. Built with modern web technologies for seamless voice interactions.",
    image: voiceAILogo, // Using public folder path (has space)
    tags: ["JavaScript", "Voice API", "AI/ML", "Web Speech API"],
    github: "https://github.com/mrityu12/ai-voice-assistant", // Update with your actual repo
    webapp: "https://ai-voice-assistant-pink.vercel.app/", // Update with actual link
  },
];
