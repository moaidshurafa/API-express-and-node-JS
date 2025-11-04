/* eslint-disable no-undef */
const express = require("express");
const router = express.Router();

let users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];

// Get all users
router.get("/", (req, res) => {
  res.json(users);
});

// Get user by ID
router.get("/:id", (req, res) => {
  const user = users.find((u) => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).send("User not found");
  res.json(user);
});

// Create new user
router.post("/", (req, res) => {
  const newUser = { id: users.length + 1, name: req.body.name };
  users.push(newUser);
  res.status(201).json(newUser);//
});

// Update user
router.put("/:id", (req, res) => {
  const user = users.find((u) => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).send("User not found");
  user.name = req.body.name;
  res.json(user);
});

// Delete user
router.delete("/:id", (req, res) => {
  users = users.filter((u) => u.id !== parseInt(req.params.id));
  res.send("User deleted");
});

module.exports = router;
