const express = require('express');
const morgan = require('morgan');

const app = express();
const port = 8001;

// data
const dogs = [
  {
    id: 'abc',
    name: 'Dioji',
    breed: 'german shepherd',
    weight: 100
  },
  {
    id: 'def',
    name: 'Clifford',
    breed: 'big and red',
    weight: 1000
  },
  {
    id: 'ghi',
    name: 'Rusty',
    breed: 'cross labradour and german shepard',
    weight: 60
  },
];

// middleware
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(express.static('public'));

// routes

// GET /dogs
app.get('/dogs', (req, res) => {
  res.json(dogs);
});

// POST /dogs
app.post('/dogs', (req, res) => {
  const {name, breed, weight} = req.body;
  const id = Math.random().toString(36).substring(2, 5);
  const dog = {
    id,
    name,
    breed,
    weight
  }
  dogs.push(dog)
  res.json(dogs)
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});