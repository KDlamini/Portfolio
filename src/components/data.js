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
    image: `${binger}`,
    name: 'Binger TV Shows',
    type: 'Front-End',
    year: '2021',
    category: 'Web Application',
    builtWith: ['Webpack', 'JavaScript', 'TV-Maze API', 'Involvement API', 'CSS'],
    tools: ['VScode', 'Linters', 'Jest', 'Github Actions'],
    description: 'Binger website allows you to browse popular TV shows that air in different networks mainly in US, Canada, and the UK. Users can search, comment, like, and filter their favorite shows based on genre.',
    live: 'https://newhorizon-tech.github.io/tv-webapp/dist',
    code: 'https://github.com/newhorizon-tech/tv-webapp',
  },

  {
    image: `${forexmatrics}`,
    name: 'Forex Metrics',
    type: 'Front-End',
    year: '2021',
    category: 'Web Application',
    builtWith: ['React', 'Redux', 'Financial Modeling Prep API', 'CSS', 'Netlify'],
    tools: ['VScode', 'Linters', 'Jest', 'Github Actions'],
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
    builtWith: ['React', 'Redux', 'SpaceX API', 'CSS', 'Netlify'],
    tools: ['VScode', 'Linters', 'React Testing Library', 'Github Actions'],
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
    tools: ['VScode', 'Git'],
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
    builtWith: ['React', 'Hooks', 'Router', 'CSS', 'Netlify'],
    tools: ['VScode', 'Git'],
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
    builtWith: ['React', 'Sass', 'Netlify'],
    tools: ['VScode', 'Linters', 'Github Actions'],
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
    description: 'A Ruby game for two players, X and O, who take turns marking the spaces in a 3×3 grid. The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row is the winner.',
    live: 'https://repl.it/@SimoNkosi/Tic-tac-toe#tic_tac_toe.rb',
    code: 'https://github.com/KDlamini/Tic-tac-toe/blob/master/tic_tac_toe.rb',
  },
];

export default languages;
