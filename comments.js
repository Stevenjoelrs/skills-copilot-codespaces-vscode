// Create web server
const express = require('express');
const app = express();
const PORT = 3000;

// Import comments data
const comments = require('./comments.json');

// Middleware
app.use(express.json());

// GET /comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// POST /comments
app.post('/comments', (req, res) => {
  const newComment = req.body;
  comments.push(newComment);
  res.status(201).json(newComment);
});

// PUT /comments/:id
app.put('/comments/:id', (req, res) => {
  const id = Number(req.params.id);
  const comment = comments.find(comment => comment.id === id);
  if (!comment) {
    res.status(404).json({ error: 'Comment not found' });
  } else {
    Object.assign(comment, req.body);
    res.json(comment);
  }
});

// DELETE /comments/:id
app.delete('/comments/:id', (req, res) => {
  const id = Number(req.params.id);
  const index = comments.findIndex(comment => comment.id === id);
  if (index === -1) {
    res.status(404).json({ error: 'Comment not found' });
  } else {
    comments.splice(index, 1);
    res.status(204).json();
  }
});

app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
