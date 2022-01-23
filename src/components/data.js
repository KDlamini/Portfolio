const languages = [
  {
    id: '1', name: 'Html5', icon: 'html5', level: '80%',
  },
  {
    id: '2', name: 'CSS3', icon: 'css3', level: '80%',
  },
  {
    id: '3', name: 'JavaScript', icon: 'js square', level: '80%',
  },
  {
    id: '4', name: 'ReactJS', icon: 'react', level: '85%',
  },
  {
    id: '5', name: 'NodeJS', icon: 'node js', level: '70%',
  },
  {
    id: '6', name: 'Ruby', icon: 'gem', level: '80%',
  },
];

export const projectsData = [
  {
    image: '../assets/marvel-moviecon.png',
    name: 'Marvel MovieCon',
    type: 'Front-End',
    year: '2021',
    category: 'Web Application',
    builtWith: ['Html', 'Css', 'JavaScript'],
    tools: ['VScode', 'Linters', 'Github Actions'],
    description: 'Marvel Studios MovieCon conference website where the studio\'s president discusses with fans new feature films for theatres and series to release on Disney+.',
    live: 'https://kdlamini.github.io/marvel-moviecon-capstone1/',
    code: 'https://github.com/KDlamini/marvel-moviecon-capstone1',
  },

  {
    image: 'https://github.com/KDlamini/Portfolio/blob/main/public/images/coinvestbank.png',
    name: 'Coinvest Bank',
    type: 'Front-End',
    year: '2021',
    category: 'Web Application',
    builtWith: ['React', 'Hooks', 'Router', 'CSS'],
    tools: ['VScode', 'Git'],
    description: 'Coinvest Bank is a fictional bank resembling a real world bank design and functionality.',
    live: 'https://coinvestbank.netlify.app/',
    code: 'https://github.com/KDlamini/coinvest-bank',
  },
];

export default languages;
