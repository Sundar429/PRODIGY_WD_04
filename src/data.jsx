import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';
import { SiNetlify } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import Work1 from './assets/project-1.png';
import Work2 from './assets/project-2.png';
import Work3 from './assets/project-3.png';
import Work4 from './assets/project-4.png';
// import Work5 from './assets/project-5.jpg';
// import Work6 from './assets/project-6.jpg';

import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav_icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav_icon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Project',
    icon: <FaFolderOpen className='nav_icon' />,
    path: '/project',
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav_icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'First Name : ',
    description: 'Meenakshi Sundaram',
  },

  {
    id: 2,
    title: 'Last Name : ',
    description: 'M',
  },

  {
    id: 3,
    title: 'Age : ',
    description: '23 Years',
  },

  {
    id: 4,
    title: 'Nationality : ',
    description: 'Indian',
  },



  {
    id: 5,
    title: 'Address : ',
    description: '3/398-B Kalaivanar 1st Street Dinamani Nagar Madurai-625018',
  },

  {
    id: 6,
    title: 'Phone : ',
    description: '9566404125',
  },

  {
    id: 7,
    title: 'Email : ',
    description: 'meenakshisundaram212000@gmail.com',
  },

  {
    id: 10,
    title: 'Languages : ',
    description: 'Tamil, English',
  },
];

export const stats = [
  {
    id: 1,
    no: 'Kalsalingam Institute Of Technology <br/> B.E[Computer Science and Engineering] ',
    title: 'Sep/2018 - July/2022 <br/> CGPA-8.1 <br/> ',
  },

  // {
  //   id: 2,
  //   no: 'St.John's Matric Hr.Sec.School <br/> 12th/HSC ',
  //   title: 'June/2017 - March/2018 <br /> Percentage-79.25%',
  // },

  // {
  //   id: 3,
  //   no: 'Mary Immaculate Matriculation School <br/>',
  //   title: 'Happy <br /> Customers',
  // },

  // {
  //   id: 4,
  //   no: '53+',
  //   title: ' Awards <br /> Won',
  // },
];

export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '04/2022 - 09/2022',
    title: 'Front-End Developer <span>TechGenzi Private Limited</span> ',
    desc: 'As a Frontend developer,I had design the UI for the web page by using Material UI.I had done API Integration for web pages.',
  },

  {
    id: 2,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '12/2022- 06/2023',
    title: 'Java Full Stack Development Course <span>Beasant Technologies</span> ',
    desc: 'As I learned Full stack development,I had gained skills like HTML,CSS,Javascript,Bootstrap,Java & SQL.',
  },



  {
    id: 3,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2018-2022',
    title: 'B.E[CSE] <span>Kalsalingam Institute Of Technology</span> ',
    desc: 'CGPA -8.1 ',
  },

  {
    id: 4,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2017-2018',
    title: "12th/HSC <span>St.John's Matric Hr.Sec.School</span>",
    desc: 'Percentage -79.25%',
  },

  {
    id: 5,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2015-2016',
    title: '10th/SSLC <span>Mary Immaculate Matriculation School</span>  ',
    desc: 'Percentage -85.80%',
  },
];

export const skills = [
  {
    id: 1,
    title: 'Html',
    percentage: '80',
  },

  {
    id: 2,
    title: 'Javascript',
    percentage: '75',
  },

  {
    id: 3,
    title: 'Css',
    percentage: '75',
  },

  {
    id: 4,
    title: 'React',
    percentage: '70',
  },

  {
    id: 5,
    title: 'Java',
    percentage: '80',
  },

  {
    id: 6,
    title: 'SQL',
    percentage: '70',
  },

  // {
  //   id: 7,
  //   title: 'Angular',
  //   percentage: '65',
  // },

  // {
  //   id: 8,
  //   title: 'React',
  //   percentage: '45',
  // },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: 'Landing Page',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Landing Page',
      },
    
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'HTML,CSS & Js',
      },
      {
        icon: <SiNetlify />,
        title: 'Netlify : ',
        desc: '<a href="https://food-restaruant.netlify.app/">https://food-restaruant.netlify.app</a>',
      },
      {
        icon: <FaGithub />,
        title: 'Git-hub : ',
        desc: '<a href="https://github.com/Sundar429/PRODIGY_WD_01">https://github.com/Sundar429/PRODIGY_WD_01</a>',
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: 'Stopwatch',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Stopwatch',
      },
     
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'HTML,CSS & Js',
      },
      {
        icon: <SiNetlify />,
        title: 'Netlify: ',
        desc: '<a href="https://stop-watch-res.netlify.app">https://stop-watch-res.netlify.app</a>',
      },
      {
        icon: <FaGithub />,
        title: 'Git-hub : ',
        desc: '<a href="https://github.com/Sundar429/PRODIGY_WD_02">https://github.com/Sundar429/PRODIGY_WD_02</a>',
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: 'Tic Tac Toe Game',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Tic Tac Toe Game',
      },
   
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'HTML,CSS & Js',
      },
      {
        icon: <SiNetlify />,
        title: 'Netlify : ',
        desc: '<a href="https://tic-tac-toe-game8.netlify.app">https://tic-tac-toe-game8.netlify.app</a>',
      },
      {
        icon: <FaGithub />,
        title: 'Git-hub : ',
        desc: '<a href="https://github.com/Sundar429/PRODIGY_WD_03">https://github.com/Sundar429/PRODIGY_WD_03</a>',
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: 'Weather App',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Weather App',
      },
      ,
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'HTML,CSS & Js',
      },
      {
        icon: <SiNetlify />,
        title: 'Netlify : ',
        desc: '<a href="https://weather-app-all-con.netlify.app">https://weather-app-all-con.netlify.app</a>',
      },
      {
        icon: <FaGithub />,
        title: 'Git-hub : ',
        desc: '<a href="https://github.com/Sundar429/PRODIGY_WD_05">https://github.com/Sundar429/PRODIGY_WD_05</a>',
      },
    ],
  },

  
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];
