import moviecon from '../assets/marvel-moviecon.png';
import coinvestbank from '../assets/coinvestbank2.png';
import spaceXhub from '../assets/spaceXhub.png';
import binger from '../assets/binger.png';
import forexmatrics from '../assets/forexmatrics.png';
import mathMagicians from '../assets/math-magicians.png';
import myportfolio from '../assets/about.png';
import hangman from '../assets/hangman.png';
import mastermind from '../assets/mastermind.png';
import tictactoe from '../assets/tic-tac-toe.png';
import nikestore from '../assets/nikestore.png';
import Mindly from '../assets/Mindly.png';
import Recipes from '../assets/Recipes.png';
import Budget from '../assets/Budget.png';

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
    image: 'https://user-images.githubusercontent.com/63560332/163343421-7f80f067-c46d-4fc0-9d8d-ec92b4572e07.png',
    name: 'VacayHome',
    type: 'Full-Stack',
    year: '2022',
    category: 'Web Application',
    builtWith: ['React', 'Rails API', 'PostgreSQL', 'React Bootstrap', 'CSS'],
    tools: ['VScode', 'Linters', 'Rspec', 'Github Actions', 'Netlify', 'Heroku'],
    contributors: [
      { fullName: 'Ugboaja Uchechi', profile: 'https://github.com/Ugboaja-Uchechi' },
      { fullName: 'ShoiraTa', profile: 'https://github.com/ShoiraTa' },
      { fullName: 'You-Wei Chang', profile: 'https://github.com/adamteddychang' },
    ],
    tasks: [
      { assignee: 'Simo Nkosi', task: 'Login page with authentication, navbar, and add new listing page.' },
      { assignee: 'Ugboaja Uchechi', task: 'Home page and details page.' },
      { assignee: 'ShoiraTa', task: 'Add new reservation, and my reservations page.' },
      { assignee: 'You-Wei Chang', task: 'Back-end Rails API with Rswag documentation, and delete listing page.' },
    ],
    description: 'VacayHome is place for the most luxurious listings. Book a vacation in one of our vocational houses and enjoy your stay in a comfortable and safe environment.',
    live: 'https://vacay-home.netlify.app/',
    code: 'https://github.com/ShoiraTa/Vacayhome-front-end',
  },

  {
    image: `${Recipes}`,
    name: 'Tasty Dishes',
    type: 'Full-Stack',
    year: '2022',
    category: 'Web Application',
    builtWith: ['Ruby on Rails', 'PostgreSQL', 'Bootstrap', 'CSS'],
    tools: ['VScode', 'Linters', 'Rspec', 'Github Actions', 'Heroku'],
    contributors: [
      { fullName: 'Okpara Tochukwu', profile: 'https://github.com/xtrahuman' },
    ],
    tasks: [
      { assignee: 'Simo Nkosi', task: 'Setup application with Rails and PostgreSQL, Web Design, Login page with authentication, homepage, navbar, and recipes page.' },
      { assignee: 'Okpara Tochukwu', task: 'Food list, shopping list, and public recipes.' },
    ],
    description: 'The Recipe app keeps track of all your recipes, ingredients, and inventory. It will allow you to save ingredients, keep track of what you have, create recipes, and generate a shopping list based on what you have and what you are missing from a recipe.',
    live: 'https://tasty-dishes-52422.herokuapp.com/',
    code: 'https://github.com/KDlamini/Recipe-app',
  },

  {
    image: `${binger}`,
    name: 'Binger TV Shows',
    type: 'Front-End',
    year: '2021',
    category: 'Web Application',
    builtWith: ['Webpack', 'JavaScript', 'TV-Maze API', 'Involvement API', 'CSS'],
    tools: ['VScode', 'Linters', 'Jest', 'Github Actions'],
    contributors: [
      { fullName: 'Alaukik', profile: 'https://github.com/newhorizon-tech' },
    ],
    tasks: [
      { assignee: 'Simo Nkosi', task: 'Web design, navbar, homepage, search, consume TV-Maze API.' },
      { assignee: 'Somdotta Sarkar', task: 'Project setup with Webpack, comments and likes modal, consume Involvement API.' },
    ],
    description: 'Binger website allows you to browse popular TV shows that air in different networks mainly in US, Canada, and the UK. Users can search, comment, like, and filter their favorite shows based on genre.',
    live: 'https://newhorizon-tech.github.io/tv-webapp/dist',
    code: 'https://github.com/newhorizon-tech/tv-webapp',
  },

  {
    image: `${Mindly}`,
    name: 'Mindly Blogs',
    type: 'Full-Stack',
    year: '2022',
    category: 'Web Application',
    builtWith: ['Ruby on Rails', 'PostgreSQL', 'Zerb Foundation', 'SCSS'],
    tools: ['VScode', 'Linters', 'Rspec', 'Github Actions', 'Heroku'],
    contributors: [
      { fullName: 'Somdotta Sarkar', profile: 'https://github.com/Somdotta07' },
    ],
    tasks: [
      { assignee: 'Simo Nkosi', task: 'Setup application with Rails and PostgreSQL, web design, login page with authentication, users, posts, comments, likes, and unit tests.' },
      { assignee: 'Somdotta Sarkar', task: 'API and documentation, user authorization.' },
    ],
    description: 'The Mindly app is a classic example of a blog website. This will is a fully functional website that will show the list of posts and empower readers to interact with them by adding comments and liking posts.',
    live: 'https://mindly-blogs.herokuapp.com/',
    code: 'https://github.com/KDlamini/mindly',
  },

  {
    image: `${Budget}`,
    name: 'Go Save',
    type: 'Full-Stack',
    year: '2022',
    category: 'Web Application',
    builtWith: ['Ruby on Rails', 'PostgreSQL', 'Bootstrap', 'CSS'],
    tools: ['VScode', 'Linters', 'Rspec', 'Github Actions', 'Heroku'],
    contributors: [
      { fullName: 'Solo', profile: 'https://github.com/KDlamini' },
    ],
    tasks: [
      { assignee: 'Simo Nkosi', task: 'Develop a full-stack web application using Rails, Devise, Cancancan, Bootstrap, and PostgreSQL.' },
    ],
    description: 'A mobile web application where you can manage your budget: you have a list of transactions associated with a category, so that you can see how much money you spent and on what.',
    live: 'https://young-falls-16975.herokuapp.com/',
    code: 'https://github.com/KDlamini/Budget-app',
  },

  {
    image: `${forexmatrics}`,
    name: 'Forex Metrics',
    type: 'Front-End',
    year: '2021',
    category: 'Web Application',
    builtWith: ['React', 'Redux', 'Financial Modeling Prep API', 'CSS'],
    tools: ['VScode', 'Linters', 'Jest', 'Github Actions', 'Netlify'],
    contributors: [
      { fullName: 'Solo', profile: 'https://github.com/KDlamini' },
    ],
    tasks: [
      { assignee: 'Simo Nkosi', task: 'Develop a front-end web application using React, Redux, React-Router, while consuming the Financial Modeling Prep API.' },
    ],
    description: 'This mobile first app displays a list of popular stock market prices. Users can click on selected categories including forex, majors, cryptocurrencies, stocks, and ETFs. Each category lists the latest prices update for the pair.',
    live: 'https://forex-metrics.netlify.app/',
    code: 'https://github.com/KDlamini/forex-metrics',
  },

  {
    image: `${spaceXhub}`,
    name: 'SpaceX Travellers\' Hub',
    type: 'Front-End',
    year: '2021',
    category: 'Web Application',
    builtWith: ['React', 'Redux', 'SpaceX API', 'CSS'],
    tools: ['VScode', 'Linters', 'React Testing Library', 'Github Actions', 'Netlify'],
    contributors: [
      { fullName: 'Leandro Barreto', profile: 'https://github.com/Leandro-Barretoo' },
    ],
    tasks: [
      { assignee: 'Simo Nkosi', task: 'Setup application with Create-react-app, setup react-redux using duck pattern, rockets page with reserve and cancel rocket functionality, and my profile page.' },
      { assignee: 'Leandro Barreto', task: 'Navbar, missions page with join and cancel membership functionality.' },
    ],
    description: 'SpaceX Hub allows you to view all available SpaceX Rockets and Missions. My Profile section lists all reserved rockets for booked space missions.',
    live: 'spacexhub.netlify.app/',
    code: 'https://github.com/KDlamini/space-travellers-hub',
  },

  {
    image: `${mathMagicians}`,
    name: 'React Calculator',
    type: 'Front-End',
    year: '2021',
    category: 'Web Application',
    builtWith: ['React', 'Router', 'CSS', 'Heroku'],
    tools: ['VScode', 'Linters', 'Github Actions', 'Heroku'],
    contributors: [
      { fullName: 'Vishal Verma', profile: 'https://github.com/Hector096' },
      { fullName: 'Ajise Toluwase', profile: 'https://github.com/Whoistolu' },
    ],
    tasks: [
      { assignee: 'Simo Nkosi', task: 'Develop a front-end web application using React, Redux, React-Router, with arithmetic calculations algorithm.' },
      { assignee: 'Vishal Verma', task: 'Unit tests.' },
      { assignee: 'Ajise Toluwase', task: 'Unit tests.' },
    ],
    description: 'Math magicians is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to make simple calculations and read a random math-related quote.',
    live: 'https://math-magicians-05671.herokuapp.com/',
    code: 'https://github.com/KDlamini/math-magicians',
  },

  {
    image: `${coinvestbank}`,
    name: 'Coinvest Bank',
    type: 'Front-End',
    year: '2021',
    category: 'Web Application',
    builtWith: ['React', 'Hooks', 'Router', 'CSS'],
    tools: ['VScode', 'Github Actions', 'Netlify'],
    contributors: [
      { fullName: 'Solo', profile: 'https://github.com/KDlamini' },
    ],
    tasks: [
      { assignee: 'Simo Nkosi', task: 'Develop a front-end web application using React, Redux, and React-Router.' },
    ],
    description: 'Coinvest Bank is a fictional bank resembling a real world bank design and functionality.',
    live: 'https://coinvestbank.netlify.app/',
    code: 'https://github.com/KDlamini/coinvest-bank',
  },

  {
    image: `${myportfolio}`,
    name: 'Personal Portfolio',
    type: 'Front-End',
    year: '2021',
    category: 'Web Application',
    builtWith: ['React', 'Sass'],
    tools: ['VScode', 'Linters', 'Github Actions', 'Netlify'],
    contributors: [
      { fullName: 'Solo', profile: 'https://github.com/KDlamini' },
    ],
    tasks: [
      { assignee: 'Simo Nkosi', task: 'Develop a front-end web application using React, React-Router, Context API, SCSS, and animations.' },
    ],
    description: 'My personal website depicts pages about me, my skills, highlighted projects, experience, education, certification, and contact information.',
    live: 'https://simonkosi.netlify.app/',
    code: 'https://github.com/KDlamini/Portfolio',
  },

  {
    image: `${nikestore}`,
    name: 'Nike Store',
    type: 'Front-End',
    year: '2021',
    category: 'Web Application',
    builtWith: ['Html', 'Css', 'JavaScript'],
    tools: ['VScode', 'Github'],
    contributors: [
      { fullName: 'Solo', profile: 'https://github.com/KDlamini' },
    ],
    tasks: [
      { assignee: 'Simo Nkosi', task: 'Develop a front-end web application using Html, Css, and JavaScript that re-imagines the Nike store homepage.' },
    ],
    description: 'A recreation of Nike Store that allows users to shop, browse, get latest updates, and contact support. Change the theme color matching a product by clicking on any of the Nike products.',
    live: 'https://kdlamini.github.io/nike-store/',
    code: 'https://github.com/KDlamini/nike-store',
  },

  {
    image: `${moviecon}`,
    name: 'Marvel MovieCon',
    type: 'Front-End',
    year: '2021',
    category: 'Web Application',
    builtWith: ['Html', 'Css', 'JavaScript'],
    tools: ['VScode', 'Linters', 'Github Actions'],
    contributors: [
      { fullName: 'Solo', profile: 'https://github.com/KDlamini' },
    ],
    tasks: [
      { assignee: 'Simo Nkosi', task: 'Develop a Html, css, and JavaScript application from an existing design by Creatives Commons.' },
    ],
    description: 'Marvel Studios MovieCon conference event where the studio\'s president Kevin Feige will discuss with fans new feature films for theatres and series to release on Disney+.',
    live: 'https://kdlamini.github.io/marvel-moviecon-capstone1/',
    code: 'https://github.com/KDlamini/marvel-moviecon-capstone1',
  },

  {
    image: `${mastermind}`,
    name: 'Mastermind',
    type: 'Front-End',
    year: '2021',
    category: 'Game',
    builtWith: ['Ruby'],
    tools: ['VScode', 'Command Line Interface', 'Git'],
    contributors: [
      { fullName: 'Solo', profile: 'https://github.com/KDlamini' },
    ],
    tasks: [
      { assignee: 'Simo Nkosi', task: 'Develop a Ruby CLI game using classes, JSON, and read/write to File functionality.' },
    ],
    description: 'A Ruby code-breaking CLI game for two players. It resembles an earlier pencil and paper game called Bulls and Cows. A player has a number of tries to guess a secret code represented by a combination of colours.',
    live: 'https://repl.it/@SimoNkosi/Mastermind-Ruby#mastermind.rb',
    code: 'https://github.com/KDlamini/Mastermind-Ruby/blob/master/mastermind.rb',
  },

  {
    image: `${hangman}`,
    name: 'Hangman',
    type: 'Front-End',
    year: '2021',
    category: 'Game',
    builtWith: ['Ruby'],
    tools: ['VScode', 'Command Line Interface', 'Git'],
    contributors: [
      { fullName: 'Solo', profile: 'https://github.com/KDlamini' },
    ],
    tasks: [
      { assignee: 'Simo Nkosi', task: 'Develop a Ruby CLI game using classes, JSON, and read/write to File functionality.' },
    ],
    description: 'A Ruby guessing game for two or more players. One player thinks of a word, phrase or sentence and the other(s) tries to guess it by suggesting letters within a certain number of guesses.',
    live: 'https://repl.it/@SimoNkosi/Hangman-Ruby#lib/hangman.rb',
    code: 'https://github.com/KDlamini/Hangman-Ruby/blob/master/lib/hangman.rb',
  },

  {
    image: `${tictactoe}`,
    name: 'Tic Tac Toe',
    type: 'Front-End',
    year: '2021',
    category: 'Game',
    builtWith: ['Ruby'],
    tools: ['VScode', 'Command Line Interface', 'Git'],
    contributors: [
      { fullName: 'Solo', profile: 'https://github.com/KDlamini' },
    ],
    tasks: [
      { assignee: 'Simo Nkosi', task: 'Develop a Ruby CLI game using classes, JSON, and read/write to File functionality.' },
    ],
    description: 'A Ruby game for two players, X and O, who take turns marking the spaces in a 3×3 grid. The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row is the winner.',
    live: 'https://repl.it/@SimoNkosi/Tic-tac-toe#tic_tac_toe.rb',
    code: 'https://github.com/KDlamini/Tic-tac-toe/blob/master/tic_tac_toe.rb',
  },
];

export default languages;
