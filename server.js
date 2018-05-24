const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 8080;

// API routes
const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB w/ mongoose
mongoose
    .connect(db)
    .then(() => console.log('MongoDB connection successful.'))
    .catch(err => console.log(err));

app.get('/', (req, res) => res.send('Hello World!'));
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

app.listen(port, () => console.log(`Server running on ${port}.`));