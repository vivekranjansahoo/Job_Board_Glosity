<h2>Live Link : https://jobboardglosity.netlify.app/ </h2>
<br>
<h3>Complete Demo Video :</h3>


https://github.com/vivekranjansahoo/Job_Board_Glosity/assets/97107034/d7fcedff-4e1e-4632-bd8b-44033556163b

Demo user
 ```bash
Email-testuser@gmail.com
Password - 123456
```

Demo recruiter
```bash
Email - vk@gmail.com
Password - 123456
```

# Job Portal Website

A job portal website built using the MERN stack, allowing recruiters to post job listings and applicants to apply for jobs. The platform features separate login/signup for recruiters and applicants, CRUD functionality for job postings, and application tracking for recruiters.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- User authentication (separate login/signup for recruiters and applicants)
- Recruiters can create, read, update, and delete job postings
- Applicants can view job listings and apply for jobs
- Recruiters can view applicants for their job postings
- Export applicant data to Excel format (for recruiters)

## Tech Stack

- **Frontend:** React, DaisyUI, Axios
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JWT (JSON Web Tokens)
- **Other:** Mongoose

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js
- npm (Node Package Manager)
- MongoDB

### Installation

1. **Clone the repository:**

    ```bash
   https://github.com/vivekranjansahoo/Job_Board_Glosity.git
    cd Job_Board_Glosity
    ```

2. **Install backend dependencies:**

    ```bash
    cd backend
    npm install
    ```

3. **Install frontend dependencies:**

    ```bash
    cd ../frontend
    npm install
    ```

### Running the Application

1. **Start MongoDB:**

    Make sure your MongoDB server is running. You can start it using:

    ```bash
    mongod
    ```

2. **Start the backend server:**

    ```bash
    cd backend
    npm start
    ```

    
3. **Add env file backend server:**
   
     ```bash
   MONGO_URI=your mongo string
   PORT= 
   JWT_SECRET=
    ```
   The backend server will start on `http://localhost:5000`

4. **Start the frontend server:**

    Open a new terminal window:

    ```bash
    cd frontend
    npm start
    ```

    The frontend server will start on `http://localhost:5173`.

## API Documentation

### User Authentication

- **POST** `/api/auth/register` - Register a new user
- **POST** `/api/auth/login` - Log in an existing user

### Job Postings

- **POST** `/api/jobs` - Create a new job posting (Recruiters only)
- **GET** `/api/jobs` - Get all job postings (Applicants only)
- **GET** `/api/jobs/:id` - Get a specific job posting
- **PUT** `/api/jobs/:id` - Update a job posting (Recruiters only)
- **DELETE** `/api/jobs/:id` - Delete a job posting (Recruiters only)
- - **POST** `/api/jobs/:id/apply` - Apply for a job (Applicants only)


## Contributing

We welcome contributions from the community! Please follow these steps to contribute:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature-name`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some feature'`)
5. Push to the branch (`git push origin feature/your-feature-name`)
6. Open a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

If you have any questions or suggestions, feel free to reach out to us at:

- Email: work.vivekranjansahoo@gmail.com
- GitHub: [vivekranjansahoo](https://github.com/vivekranjansahoo)


