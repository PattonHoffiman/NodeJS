const express = require("express");
const cors = require("cors");

const { v4: uuid } = require('uuid');

const app = express();

app.use(express.json());
app.use(cors());

const repositories = [];

app.get("/repositories", (req, res) => {
  return res.json(repositories);
});

app.post("/repositories", (req, res) => {
  const { title, url, techs } = req.body;
  const repository = { id: uuid(), title, url, techs, likes: 0 }
  
  repositories.push(repository);
  return res.json(repository);
});

app.put("/repositories/:id", (req, res) => {
  const { id } = req.params;
  const { title, url, techs } = req.body;
  const index = repositories.findIndex(repository => repository.id === id);

  if(index === -1) return res.status(404).json({ message : 'Repository not found' });

  const likes = repositories[index].likes;
  const repository = { id, title, url, techs, likes }
  
  repositories[index] = repository;
  return res.json(repository);
});

app.delete("/repositories/:id", (request, response) => {
  // TODO
});

app.post("/repositories/:id/like", (request, response) => {
  // TODO
});

module.exports = app;
