// Skills Section Logo's---------------------

import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
// import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
// import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
// import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import figmaLogo from './assets/tech_logo/figma.png';
// import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
// import postgreLogo from './assets/tech_logo/postgre.png';

// Experience logo-------------------------------------
import edunet from "./assets/Experience/edunet.jpg"
import GSoC from "./assets/Experience/GSoC.png"

// Projects logo---------------------------------------
import urlshortner from "./assets/Work/urlshortner.png"
import blogo from "./assets/Work/blogo.png"
import legaleaselogo from "./assets/Work/legaleaselogo.png"
import portfolio from "./assets/Work/Portfolio.png"

// Education logo-------------------------------------------
import IPSACADEMY from "./assets/education/IPS_Academy.jpg" 
import Model_college from "./assets/education/Model_college.jpg" 
import DAV from "./assets/education/DAV.jpg"  ;


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
    //   { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
    //   { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material UI', logo: materialuiLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    //   { name: 'Firebase', logo: firebaseLogo },
    //   { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Vercel', logo: vercelLogo },
    //   { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: edunet,
      role: "Fullstack Developer",
      company: "Edunet Foundation",
      date: "February 10, 2025- March 21, 2025",
      desc: "Developed dynamic and scalable auction web application using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "Node JS",
        "Tailwind CSS",
        "MongoDb"
      ],
    },
    {
      id:1,
      img: GSoC,
      role: "Contributor",
      company:"Google Summer of Code",
      date:"Jul 2024- Oct 2024",
      desc: "Contributed to an open-source project in GSoC, collaborating with mentors to build impactful and scalable software features.",
    skills: [
      "Code Documentation",
             " Debugging & Testing ",
             " GitHub "
            ],
  }
   
  ];
  
  export const education = [
    {
      id: 0,
      img: IPSACADEMY,
      school: "IES IPS ACADEMY",
      date: "July 2022 - April 2026",
      grade: "7.18 CGPA",
      desc: "I'm pursuing Btech in CSIT from IPS ACADEMY, throughout this time i got to learn about various   ",
      degree: "Btech in CSIT",
    },
    {
      id: 1,
      img: Model_college,
      school: "Model College, Mumbai",
      date: "Sept 2019 - Aug 2021",
      grade: "75.8%",
      desc: "I completed my class 12 education from Model College, Dombivili, under Maharashtra Board, where I studies physics,chemistry and Mathematics (PCM) with Electronics.",
      degree: "XII- PCM with Electronics",
    },
    {
      id: 2,
      img: DAV,
      school: "Dr. D.A.V. Public School, Patna",
      date: "Apr 2017 - March 2019",
      grade: "83.16%",
      desc: "I completed my class 10 education from Dr. D. Ram D.A.V. Public School,Patna, under the CBSE board.",
      degree: "CBSE(X)",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Url Shortner",
      description:
        "Built responsive URL shortening platform with analytics, QR codes, real-time tracking, data visualization, user accounts, and security using Supabase/Tailwind.",
      image: urlshortner,
      tags: [" React.js", "Tailwind CSS", "Supabase", "Shadcn UI"],
      github:" https://github.com/Sahni06/UrlShortner",
    },
    {
      id: 1,
      title: "BlogShip",
      description:
       " Built a responsive and visually appealing blog website using HTML, CSS, and JavaScript, integrating interactive features and ensuring seamless functionality across devices to enhance user experience andengagement",
        image: blogo,
      tags: ["HTML", "CSS", "Javascript"],
      github: "https://github.com/Sahni06/Blogship-blog-website-",
    },
  
    {
      id: 2,
      title: "Legalease",
      description:
     " The Legalease connects users with lawyers for secure virtual consultations. It features safe payments, robust data protection, and a free AI legal advisor chatbot.",
      image: legaleaselogo,
      tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/Sahni06/Legalease-Consultancy-Website/tree/main",
    },

    {
      id: 3,
      title: "Portfolio Website",
      description:
      "This site is a React JS-based portfolio showcasing my personal data and professional background, including information about me, my skills, past projects and contact info. it is a one-stop destination for discovering all the relevant details about me",
      image: portfolio,
      tags: ["React JS", "Tailwind CSS","Vercel"],
    github: "https://github.com/Sahni06/Portfolio"

    }
  ]
