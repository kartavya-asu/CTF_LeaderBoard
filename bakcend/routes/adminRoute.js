import express from "express";

const router = express.Router();

// ADMIN Login API endpoint
router.post('/', (req, res) => {
    const { username, password } = req.body;
    console.log("Req received");
    // Check if the credentials match
    if (username === "CTF-ASU-2024" && password === "ASU2024CTF") {
        res.json({ status: 'success', message: 'Login successful' });
    } else {
        res.status(401).json({ status: 'error', message: 'Invalid credentials' });
    }
});

export default router;

