const express = require("express");
const router = express.Router();
const User = require("../modules/User");
const jwt = require("jsonwebtoken");
require('dotenv').config();
const bcrypt = require("bcrypt");
const jwtSecret = process.env.SECRETKEY;

router.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "All fields are mandatory" });
  }

  try {
    const userAvailable = await User.findOne({ email });
    if (userAvailable) {
      return res.status(400).json({ message: "User already registered!" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    if (user) {
      return res.status(201).json({ _id: user.id, email: user.email });
    } else {
      return res.status(400).json({ message: "User data is not valid" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "All fields are mandatory!" });
  }

  try {
    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      const accessToken = jwt.sign(
        {
          user: {
            username: user.username,
            email: user.email,
            id: user.id,
          },
        },
        jwtSecret,
        { expiresIn: '10m' }
      );

      res.status(200).json({
        accessToken,
        username: user.username
    });
    } else {
      return res.status(401).json({ message: "Email or password is not valid" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
});

router.get("/user", async (req, res) => {
  try {
    const users = await User.find();
    return res.status(200).json(users);
  } catch (err) {
    return res.status(500).json({ message: err.message || "Error while retrieving items" });
  }
});

module.exports = router;
