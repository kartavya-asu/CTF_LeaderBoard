import express from "express";

import userRoute from "./routes/userRoute.js"

import challengeRoute from "./routes/challengeRoute.js";

import adminRoute from "./routes/adminRoute.js"

import mongoose from "mongoose";

import cors from "cors";

import path from "path";

import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const reactDirPath = path.join(__dirname,'..','/frontend');

const PORT = process.env.PORT;

const mongoDBURL = process.env.MONGODB_URL;

const app = express();

app.use(express.json());

app.use(cors());

app.use('/users', userRoute);

app.use('/challenges', challengeRoute);

app.use('/admin', adminRoute);

// Serve static files from the React app
app.use(express.static(path.join(reactDirPath, 'dist')));

app.get('*', (req, res) => {
    res.sendFile(path.join(reactDirPath+'/dist/index.html'));
  });


mongoose.connect(mongoDBURL)
    .then(()=>{
        console.log("DB Connected");
        app.listen(PORT,()=>{
            console.log(`Server is running on port: ${PORT}`);
        })
    }).catch((error)=>{
        console.log("Error while connecting DB: " + error);
    });