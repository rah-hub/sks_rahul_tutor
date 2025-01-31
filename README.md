skc_rahul_pythonTutor
Python Adventure - AI-Powered Python Tutor for Kids
Welcome to Python Adventure! This project is an AI-powered Python tutor designed to help children learn basic Python coding in a fun and interactive way. The application features customizable tutor characters, engaging lessons, and interactive homework assignments.

Features
User-Friendly Interface: A clear, engaging, and child-friendly interface.
Customizable Tutor Characters: Kids can choose their favorite character as their Python tutor.
Interactive Lessons: Engaging Python coding lessons with real-time feedback.
Homework Assignments: Interactive exercises at the end of each lesson to reinforce learning.
Getting Started
Prerequisites
Node.js (v14 or higher)
Git
Installation
Clone the repository:

git clone https://github.com/your-username/python-tutor-project.git
cd python-tutor-project
Install dependencies:

npm install
Start the development server:

npm run dev
Open your browser and navigate to:

http://localhost:3000
Configuring Your API Key
Navigate to the Settings page:
Enter your OpenAI API key in the input field.
Click Save to store the API key in local storage.
File Structure
python-tutor-project/
├── node_modules/
├── public/
│   ├── images/
│   │   ├── robo.png
│   │   ├── kitty.png
│   │   └── wizard.png
│   ├── favicon.ico
│   └── index.html
├── src/
│   ├── components/
│   │   ├── NavBar.jsx
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── HomePage.jsx
│   │   ├── LessonPage.jsx
│   │   └── CharacterSelectionPage.jsx
│   ├── App.css
│   ├── index.css
│   ├── main.jsx
│   └── Router.jsx
├── .gitignore
├── package.json
├── README.md
└── vite.config.js

Technologies Used
Vite: A fast build tool and development server.

React: A JavaScript library for building user interfaces.

react-router-dom: A library for routing in React applications.

OpenAI API: An API for natural language processing and AI-powered interactions.

Contributing
We welcome contributions to improve Python Adventure. Please follow these steps to contribute:

Fork the repository.

Create a new branch: git checkout -b feature-branch-name

Make your changes and commit them: git commit -m 'Add new feature'

Push to the branch: git push origin feature-branch-name

Create a pull request.
