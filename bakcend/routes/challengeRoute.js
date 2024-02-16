import express from "express";

import fs from "fs";

import path from "path";

import { fileURLToPath } from "url";

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const dataDirPath = path.join(__dirname,'..','data');

router.get('/', (req, res) => {
    fs.readFile(path.join(dataDirPath, 'challenges.json'), 'utf8', (err, data) => {
      if (err) {
        console.error("Error reading file:", err);
        return res.status(500).send({ message: "Failed to load challenges." });
      }
      res.json(JSON.parse(data));
    });
  });

  export default router;