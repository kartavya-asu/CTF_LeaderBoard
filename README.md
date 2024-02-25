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

- Node.js 20.10.0 or newer: Ensure you have Node.js version 20.10.0 or newer installed on your system. If you need to install or upgrade Node.js, visit the official Node.js website for download instructions.
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

Before running the application, create a `.env` file in the `backend` directory to securely manage your application configuration. This file should include the following environment variables:

```text
# .env file content
PORT="port_number"
MONGODB_URL="your_mongodb_connection_string"
CIPHER_CODE="YOUR_CODE"
```

Note: Replace `"port_number"`,`"your_mongodb_connection_string"` and `"YOUR_CODE"` with your actual Port Number(for e.g: 5555), MongoDB connection string and cipher code, respectively.

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
