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

- Node.js
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

## MongoDB Connection

Create a .env file in the root directory and add your MongoDB URI and any other environment variables:

```bash
MONGODB_URI=your_mongodb_uri
```

## Usage

- Navigate to http://localhost:5173/ to access the application.
- Click on the "Start" button to begin participating in challenges.
- Use the "Show Hint" button if you need a hint for a challenge. Remember, using a hint deducts points.
- Submit your answers to challenges and view your updated rank on the leaderboard.

## Admin Use

- You can add challenges to challenges.json file
  Go to backend/data/challenges.json
  example:

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
  example

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
