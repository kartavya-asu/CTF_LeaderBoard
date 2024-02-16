import express from "express";

import { PORT, mongoDBURL } from "./config.js";

import mongoose from "mongoose";

import cors from "cors";

const app = express();

app.use(express.json());

app.use(cors());

mongoose.connect(mongoDBURL)
    .then(()=>{
        console.log("DB Connected");
        app.listen(PORT,()=>{
            console.log(`Server is running on port: ${PORT}`);
        })
    }).catch((error)=>{
        console.log("Error while connecting DB: " + error);
    });