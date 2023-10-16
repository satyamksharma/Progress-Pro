# Progress Pro - Custom Fitness Web Application

Progress Pro is a full-stack web application built using ReactJS, NodeJS, ExpressJS, Tailwind CSS, and MySQL. It is a custom fitness web application that allows users to create and track their own fitness plans to help them reach their fitness goals.

## Features

- **User Authentication**: Secure user registration and authentication system.
- **Dashboard**: Users can view their fitness plans, progress, and set new fitness goals.
- **Fitness Plan Creation**: Create custom fitness plans with exercises, sets, reps, and rest intervals.
- **Progress Tracking**: Log workouts, track progress, and view statistics.
- **Goal Setting**: Set fitness goals and monitor progress towards achieving them.
- **Community**: Connect with other users, share achievements, and provide support.
- **Responsive Design**: The application is responsive and works on both desktop and mobile devices.

## Technologies Used

- **Frontend**:
  - ReactJS: Frontend UI library.
  - Tailwind CSS: CSS framework for styling.
  
- **Backend**:
  - NodeJS: Server-side JavaScript runtime.
  - ExpressJS: Web application framework for Node.js.
  - MySQL: Relational database for storing user data and fitness plans.
  
- **Authentication**:
  - JWT (JSON Web Tokens) for secure authentication.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/satyamksharma/Progress-Pro.git

2. Navigate to the project directory:

   ```bash
   cd progress-pro

3. Install the frontend and backend dependencies:

   ```bash
   # Install frontend dependencies
    cd client
    npm install

    # Install backend dependencies
    cd ..
    cd server
    npm install

4. Set up the MySQL database. You will need to create a `.env` file in the `server` directory and provide your MySQL database configuration. Example:

    ```bash
    DB_HOST=localhost
    DB_USER=root
    DB_PASSWORD=password
    DB_NAME=progresspro

5. Create the necessary database tables by running migrations:

    ```bash
    cd server
    npm run migrate

6. Start the backend server:

    ```bash
    npm start

7. Start the frontend development server:

    ```bash
    cd client
    npm ren dev

8. Open your browser and navigate to `http://localhost:3000` to access the application.



## Usage

-Register for an account or log in if you already have one.
-Create your custom fitness plan with exercises, sets, reps, and rest intervals.
-Log your workouts and track your progress.
-Set fitness goals and monitor your progress towards achieving them.
-Connect with the fitness community and stay motivated.
   
   
## Contribution

We welcome contributions from the community. If you would like to contribute to this project, please follow our Contribution Guidelines.


## License

This project is licensed under the MIT License - see the `LICENSE` file for details.


## Contact

If you have any questions or suggestions, please feel free to contact us at [ksatyam433@gmail.com] or [sskworld7794@gmail.com].

Thank you for using Progress Pro! We hope it helps you on your fitness journey.
