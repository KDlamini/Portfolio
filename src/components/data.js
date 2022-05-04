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
      { assignee: 'Simo Dlamini', task: 'Login page with authentication, navbar, and add new listing page.' },
      { assignee: 'Ugboaja Uchechi', task: 'Home page and details page.' },
      { assignee: 'ShoiraTa', task: 'Add new reservation, and my reservations page.' },
      { assignee: 'You-Wei Chang', task: 'Back-end Rails API with Rswag documentation, and delete listing page.' },
    ],
    requirements: {
      info: 'Develop a full-stack application using React and Rails that allows users to create, view, and reserve vacation homes. The design should be inspired by the design provided by Murat Korkmaz on Behance.',
      details: [
        'The application should be responsive and mobile-friendly',
        'The application should be able to handle multiple users. The user logs in to the website, only by typing the username. The user can create a new account, and can view all the vacation homes available on the website. The user can also view the details of the vacation home, and reserve it. The user can also view all the reservations made by the user. The user can also cancel a reservation made by the user.',
        'In the navigation panel, the user can see links to all "Listings", "Reserve" form, "My reservations", add new listing, and delete listing.',
        'On the main page, the user can see a list of listings',
        'When the user selects a specific item, they can see the details page with its full description, and the user can reserve it.',
        'Add full documentation for the API, and use Swagger to document the API.',
      ],
    },
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
      { assignee: 'Simo Dlamini', task: 'Setup application with Rails and PostgreSQL, Web Design, Login page with authentication, homepage, navbar, and recipes page.' },
      { assignee: 'Okpara Tochukwu', task: 'Food list, shopping list, and public recipes.' },
    ],
    requirements: {
      info: 'Develop a full-stack application using Ruby on Rails that allows users to create recipes, ingredients, and generate a shopping list. The app should follow the data model (Entity Relationship Diagram) and predefined wireframes provided by the instructor. The following requirements must be be met:',
      details: [
        'Login page and registration page: should be built with Devise.',
        'Food list: should display a list of food as in the wireframe. Should lead to the form that allows users to add new food.',
        'Recipes list: should display a list of recipes created by the logged-in user as in the wireframe. Should lead to recipe details. If the user is the owner of the recipe, should allow user to delete it.',
        'Public recipe list: should display a list of all public recipes ordered by newest as in the wireframe. Should lead to recipe details.',
        'Recipe details: If the recipe is public or the user is the owner of the recipe, should display the recipe details as in the wireframe. If the user is the owner of the recipe, should lead to the form that allows user to add new food.',
        'General shopping list view: should show the list of food that is missing for all recipes of the logged-in user. Should count the total food items and total price of the missing food.',
        'Set up RSpec and Capybara testing libraries.',
        'Set up associations between models and use validations for models. Secure app from n+1 problems.',
      ],
    },
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
      { assignee: 'Simo Dlamini', task: 'Web design, navbar, homepage, search, consume TV-Maze API.' },
      { assignee: 'Alaukik', task: 'Project setup with Webpack, comments and likes modal, consume Involvement API.' },
    ],
    requirements: {
      info: 'Develop a Webpack application based on an external API. Apply the concepts of ES6 JavaScript, ES6 modules, callbacks and promises, and JSON. The following requirements must be be met:',
      details: [
        'A home page showing a list of TV shows fetched from the TV-Maze API. The TV show should display the name, image, and summary of each show.',
        'When a user clicks on a TV show, a popup window with more details about the show. The show details page should display the name, image, description, and comments section of the show.',
        'Utilize the Involvement API to record the different user interactions (likes,and comments).',
        'Follow the layout of the wireframes provided and personalize the rest of the design including colors, typographies, spacings,',
        'The navbar should indicate the number of shows displayed per page.',
        'Add a search bar to the home page that allows users to search for a TV show by name.',
        'Use AAA pattern for unit tests',
      ],
    },
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
      { assignee: 'Simo Dlamini', task: 'Setup application with Rails and PostgreSQL, web design, login page with authentication, users, posts, comments, likes, and unit tests with Rspec and Capybara.' },
      { assignee: 'Somdotta Sarkar', task: 'API and documentation, user authorization, unit tests with Rspec and Capybara.' },
    ],
    requirements: {
      info: '',
      details: [],
    },
    description: 'The Mindly app is a classic example of a blog website. This will is a fully functional website that will show the list of posts and empower readers to interact with them by adding comments and liking posts.',
    live: 'https://mindly-blogs.herokuapp.com/',
    code: 'https://github.com/KDlamini/mindly',
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
      { assignee: 'Simo Dlamini', task: 'Develop a Html, css, and JavaScript application from an existing design by Creatives Commons.' },
    ],
    requirements: {
      info: '',
      details: [],
    },
    description: 'Marvel Studios MovieCon conference event where the studio\'s president Kevin Feige will discuss with fans new feature films for theatres and series to release on Disney+.',
    live: 'https://kdlamini.github.io/marvel-moviecon-capstone1/',
    code: 'https://github.com/KDlamini/marvel-moviecon-capstone1',
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
      { assignee: 'Simo Dlamini', task: 'Develop a full-stack budget web application using Rails, Devise, Cancancan, Bootstrap, and PostgreSQL.' },
    ],
    requirements: {
      info: 'Develop a Ruby on Rails application that allows the user to register and log in so that the data is private to them, introduce new transactions associated with a category, and see the money spent on each category. The design should be inspired by the original design idea by Gregoire Vella on Behance.',
      details: [
        'The application should be responsive and mobile-friendly',
        'Splash screen: a simple page with the name of the app, and links to the sign up and log in pages.',
        'Users: The user should be able to register in the app with full name, email and password. The user can log into the app using email and password. The user can create a new account, and can create, view, update, and delete new categories and transactions. If the user is not logged in, they can\'t access pages that require the user to be logged in.',
        'Home page: When the user logs in, they are presented with the categories page. For each category, the user can see their name, icon and the total amount of all the transactions that belongs to that category. When the user clicks (or taps) on a category item, the application navigates to the transactions page for that category. There is a button "add a new category" at the bottom that brings the user to the page to create a new category.',
      ],
    },
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
      { assignee: 'Simo Dlamini', task: 'Develop a front-end web application using React, Redux, React-Router, while consuming the Financial Modeling Prep API.' },
    ],
    requirements: {
      info: '',
      details: [],
    },
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
      { assignee: 'Simo Dlamini', task: 'Setup application with Create-react-app, setup react-redux using duck pattern, rockets page with reserve and cancel rocket functionality, and my profile page.' },
      { assignee: 'Leandro Barreto', task: 'Navbar, missions page with join and cancel membership functionality.' },
    ],
    requirements: {
      info: '',
      details: [],
    },
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
      { assignee: 'Simo Dlamini', task: 'Develop a front-end web application using React, Redux, React-Router, with arithmetic calculations algorithm.' },
      { assignee: 'Vishal Verma', task: 'Unit tests with Jest and React Testing Library.' },
      { assignee: 'Ajise Toluwase', task: 'Unit tests with Jest and React Testing Library.' },
    ],
    requirements: {
      info: '',
      details: [],
    },
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
      { assignee: 'Simo Dlamini', task: 'Develop a front-end web application using React, Redux, and React-Router.' },
    ],
    requirements: {
      info: '',
      details: [],
    },
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
      { assignee: 'Simo Dlamini', task: 'Develop a front-end web application using React, React-Router, Context API, SCSS, and animations.' },
    ],
    requirements: {
      info: '',
      details: [],
    },
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
      { assignee: 'Simo Dlamini', task: 'Develop a front-end web application using Html, Css, and JavaScript that re-imagines the Nike store homepage.' },
    ],
    requirements: {
      info: '',
      details: [],
    },
    description: 'A recreation of Nike Store that allows users to shop, browse, get latest updates, and contact support. Change the theme color matching a product by clicking on any of the Nike products.',
    live: 'https://kdlamini.github.io/nike-store/',
    code: 'https://github.com/KDlamini/nike-store',
  },

  {
    image: `${mastermind}`,
    name: 'Mastermind',
    type: 'Back-End',
    year: '2021',
    category: 'Game',
    builtWith: ['Ruby'],
    tools: ['VScode', 'Command Line Interface', 'Git'],
    contributors: [
      { fullName: 'Solo', profile: 'https://github.com/KDlamini' },
    ],
    tasks: [
      { assignee: 'Simo Dlamini', task: 'Develop a Ruby CLI game using classes, JSON, and read/write to File functionality.' },
    ],
    requirements: {
      info: '',
      details: [],
    },
    description: 'A Ruby code-breaking CLI game for two players. It resembles an earlier pencil and paper game called Bulls and Cows. A player has a number of tries to guess a secret code represented by a combination of colours.',
    live: 'https://repl.it/@SimoNkosi/Mastermind-Ruby#mastermind.rb',
    code: 'https://github.com/KDlamini/Mastermind-Ruby/blob/master/mastermind.rb',
  },

  {
    image: `${hangman}`,
    name: 'Hangman',
    type: 'Back-End',
    year: '2021',
    category: 'Game',
    builtWith: ['Ruby'],
    tools: ['VScode', 'Command Line Interface', 'Git'],
    contributors: [
      { fullName: 'Solo', profile: 'https://github.com/KDlamini' },
    ],
    tasks: [
      { assignee: 'Simo Dlamini', task: 'Develop a Ruby CLI game using classes, JSON, and read/write to File functionality.' },
    ],
    requirements: {
      info: '',
      details: [],
    },
    description: 'A Ruby guessing game for two or more players. One player thinks of a word, phrase or sentence and the other(s) tries to guess it by suggesting letters within a certain number of guesses.',
    live: 'https://repl.it/@SimoNkosi/Hangman-Ruby#lib/hangman.rb',
    code: 'https://github.com/KDlamini/Hangman-Ruby/blob/master/lib/hangman.rb',
  },

  {
    image: `${tictactoe}`,
    name: 'Tic Tac Toe',
    type: 'Back-End',
    year: '2021',
    category: 'Game',
    builtWith: ['Ruby'],
    tools: ['VScode', 'Command Line Interface', 'Git'],
    contributors: [
      { fullName: 'Solo', profile: 'https://github.com/KDlamini' },
    ],
    tasks: [
      { assignee: 'Simo Dlamini', task: 'Develop a Ruby CLI game using classes, JSON, and read/write to File functionality.' },
    ],
    requirements: {
      info: '',
      details: [],
    },
    description: 'A Ruby game for two players, X and O, who take turns marking the spaces in a 3×3 grid. The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row is the winner.',
    live: 'https://repl.it/@SimoNkosi/Tic-tac-toe#tic_tac_toe.rb',
    code: 'https://github.com/KDlamini/Tic-tac-toe/blob/master/tic_tac_toe.rb',
  },
];

export default languages;
