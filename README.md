# Ace-Acad 🎓

Ace-Acad is a modern, feature-rich web application designed to be the ultimate study companion for students. It provides a suite of powerful tools to help students organize their learning, prepare for exams, and stay motivated. With a sleek, intuitive interface and a focus on user experience, Ace-Acad aims to make studying smarter, not harder.

![Ace-Acad Dashboard Screenshot](https://via.placeholder.com/800x400.png?text=Ace-Acad+Dashboard)

## ✨ Key Features

-   **User Authentication:** Secure and easy-to-use authentication system with flows for registration, login, and password reset.
-   **Interactive Dashboard:** A personalized dashboard that welcomes students and provides at-a-glance information about their studies.
-   **Digital Library:** An extensive collection of books and resources, complete with summaries to aid in learning.
-   **In-depth Study Guides:** Comprehensive study materials and guides on a variety of subjects.
-   **Dynamic Flashcards:** An interactive flashcard system to help reinforce key concepts and definitions.
-   **Mock Tests & Quizzes:** A robust testing feature with mock exams and quizzes to help students assess their knowledge and prepare for tests.
-   **Reminder Scheduler:** A handy tool to schedule study sessions and set reminders for important academic events.
-   **Dark/Light Mode:** A theme-switcher for a comfortable user experience in different lighting conditions.
-   **Responsive Design:** A fully responsive layout that works seamlessly across desktops, tablets, and mobile devices.
-   **PWA Enabled:** Can be installed on your device for a native-like experience.

## 💻 Tech Stack

-   **Frontend:** [React](https://reactjs.org/), [Tailwind CSS](https://tailwindcss.com/)
-   **Routing:** [React Router](https://reactrouter.com/)
-   **Animations:** [Framer Motion](https://www.framer.com/motion/)
-   **HTTP Client:** [Axios](https://axios-http.com/)
-   **Icons:** [Lucide React](https://lucide.dev/)
-   **Form Management:** [React Hook Form](https://react-hook-form.com/)
-   **Progressive Web App (PWA):** Built using the Create React App PWA template.

## 🚀 Getting Started

To get a local copy up and running, please follow these simple steps.

### Prerequisites

Make sure you have the following installed on your machine:
- [Node.js](https://nodejs.org/en/) (which includes npm)

### Installation

1.  **Clone the repo**
    ```sh
    git clone https://github.com/your_username/ace-acad.git
    ```
2.  **Navigate to the project directory**
    ```sh
    cd ace-acad
    ```
3.  **Install NPM packages**
    ```sh
    npm install
    ```

### Running the Application

Once the dependencies are installed, you can run the application in development mode:
```sh
npm start
```
This will open the app in your default browser at [http://localhost:3000](http://localhost:3000).

## 📂 Project Structure

The project follows a standard React application structure. Here's an overview of the key directories:

```
/
├── public/           # Static assets and index.html
├── src/
│   ├── api/          # API layer (Axios instance)
│   ├── components/   # Reusable UI components
│   ├── data/         # Static data (e.g., quotes)
│   ├── hooks/        # Custom React hooks
│   ├── pages/        # Application pages
│   ├── App.js        # Main app component with routing
│   └── index.js      # Entry point of the application
└── package.json      # Project dependencies and scripts
```

## 📜 Available Scripts

In the project directory, you can run the following commands:

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.
