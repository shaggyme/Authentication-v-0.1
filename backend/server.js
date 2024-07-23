const express = require("express");
const app = express();
const port = 8000;
const connectDB = require("./db/dbConnect");
const User = require("./db/user");
const cors = require('cors');

// Middleware for parsing JSON responses
app.use(express.json());

// Enable Cors
app.use(cors());

// Registration
app.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = new User({ username, password });
    await user.save();
    res.status(201).json({ message: "Registration successful" });
  } catch (error) {
    res.status(500).json({ error: "Registration Failed" });
  }
});

// Login
app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username: username });
    if (!user) {
      res.status(404).json({ error: "Invalid username or password" });
    }

    if (user.password !== password) {
      res.status(401).json({ error: "Invalid password" });
    }

    res.status(200).json({ message: "Login successful" });
  } catch (error) {
    res.status(500).json({ error: "Login Failed" });
  }
});

// Connect to the database
connectDB();

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on Port ${port}`);
});
