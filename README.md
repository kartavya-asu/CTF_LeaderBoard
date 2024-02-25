# Capture The Flag (CTF) Challenge App

This project is a web-based application designed for running Capture The Flag (CTF) challenges. It allows users to participate in various challenges, submit answers, and view their rankings on a leaderboard.

## Features

- **Challenge Participation**: Users can participate in a series of predefined challenges, each with a unique set of requirements and points.
- **Hint System**: Participants can request hints for challenges, with a points penalty for each hint used.
- **Leaderboard**: A dynamic leaderboard displays participants' rankings based on their points, updated in real-time as challenges are completed.
- **User Management**: Users can enter unique codes to participate, ensuring a level of anonymity and fun in the challenge.

## Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js with Express
- **Database**: MongoDB
- **Styling**: Tailwind CSS for a responsive and themed user interface.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- **Node.js 20.10.0 or newer**: Ensure you have Node.js version 20.10.0 or newer installed on your system. If you need to install or upgrade Node.js, visit [the official Node.js website](https://nodejs.org/) for download instructions.
- npm or yarn
- MongoDB

### Installation

1. Clone the repository:

```bash
git clone https://github.com/kartavya-asu/CTF_LeaderBoard.git

```

2. Navigate to the repository:

```bash
cd CTF_LeaderBoard
```

3. To run backend server

```bash
## open a terminal
cd backend
npm install
npm start
```

4. To run frontend server

```bash
## open a new terminal
cd frontend
npm install
npm run dev
```

## Environment Configuration

To securely manage your application's configuration, you will need to create `.env` files in both the backend and frontend directories. These files will include environment variables specific to each part of your application.

### Backend Configuration

Before running the application, create a `.env` file in the `backend` directory to securely manage your application configuration. This file should include the following environment variables:

```text
# .env file content
PORT="port_number"
MONGODB_URL="your_mongodb_connection_string"
CIPHER_CODE="YOUR_CODE"
```

Note: Replace `"port_number"`,`"your_mongodb_connection_string"` and `"YOUR_CODE"` with your actual Port Number(for e.g: 5555), MongoDB connection string and cipher code, respectively.

### Frontend Configuration

For the frontend, we're using Vite, which simplifies the process of loading environment variables.

In the `frontend` directory of your project, create `.env` file, Use the VITE\_ prefix for each variable to ensure they are exposed to your project. For example:

```text
VITE_API_URL=http://localhost:5555
```

Utilize `import.meta.env` to access your environment variables within your React components.

Note: Variables must be prefixed with `VITE_` to be accessible in your project. Vite embeds the environment variables at build time; thus, any changes to `.env` files require a rebuild of your project to take effect.

## MongoDB Connection

The database connection is configured using the `MONGODB_URL` environment variable specified in the `.env` file. This setup supports both local MongoDB instances and MongoDB Atlas for cloud-based storage.

## Usage

- Navigate to http://localhost:5173/ to access the application.
- Click on the "Start" button to begin participating in challenges.
- Enter user name and cipher code (set by Admin) and click play to start the challenge
- Use the "Show Hint" button if you need a hint for a challenge. Remember, using a hint deducts points.
- Submit your answers to challenges and view your updated rank on the leaderboard.

## Admin Use

- You can set up a cipher code in the `.env` file as `CIPHER_CODE`.
- You can add challenges to challenges.json file,
  Go to backend/data/challenges.json,
- example:

```json
[
  {
    "id": 1,
    "title": "Challenge 1",
    "description": "Solve the puzzle.",
    "hint": "Look closely at the details.",
    "filename": "dolls.jpg",
    "points": 100
  },
  {
    "id": 2,
    "title": "Challenge 2",
    "description": "Decode the message.",
    "hint": "Use the cipher provided.",
    "filename": "code2.png",
    "points": 150
  }
]
```

- Add appropriate answers to sulution.json
- example

```json
[
  {
    "id": 1,
    "answer": "picoCTF{p}",
    "points": 100
  },
  {
    "id": 2,
    "answer": "picoCTF{k}",
    "points": 150
  }
]
```

## Running in Production

To deploy the Capture The Flag (CTF) Challenge App in a production environment, you'll need to build the frontend and set up the backend server to run continuously, even after closing the terminal session. This section guides you through preparing the application for production use. Make sure you have install Node.js and created .env files as suggested above.

1. Clone the repository:

```bash
git clone https://github.com/kartavya-asu/CTF_LeaderBoard.git

```

2. Navigate to the repository:

```bash
cd CTF_LeaderBoard
```

# Building the Frontend

First, you need to compile the frontend to static files that can be served by your backend or a web server.

Navigate to the frontend directory, Run the build command to create a production build of your React app:

```bash
## open a terminal
cd frontend
npm install
npm run build
```

This command generates a `dist` directory inside the `frontend` folder, containing the compiled static files.

# Setting Up the Backend with PM2

After building the frontend, the next step is to ensure your backend server runs continuously. We recommend using PM2, a process manager for Node.js applications, which helps keep your app alive and reloads it without downtime.

1. Install PM2 globally on your machine:

```bash
npm install pm2 -g
```

This allows you to use PM2 commands from anywhere in your terminal.

2. Navigate to the backend directory (adjust the path as needed if you're not in the project root), Start your server with PM2:

```bash
cd backend
pm2 start index.js
```

PM2 will now keep your server running in the background. You can check the status of your PM2-managed applications anytime with:

```bash
pm2 status
```

# Additional PM2 Commands

- Restart an application: `pm2 restart <app_name_or_id>`
- Stop an application: `pm2 stop <app_name_or_id>`
- Delete an application from PM2's list: `pm2 delete <app_name_or_id>`

For more detailed documentation on PM2 and its features, visit the [PM2 documentation](https://www.npmjs.com/package/pm2).
