// src/app.js
const express = require('express');

const app = express();

// src/app.js

// const express = require('express');

const teams = [
  {
    id: 1,
    name: 'São Paulo Futebol Clube',
    initials: 'SPF',
  },
  {
    id: 2,
    name: 'Clube Atlético Mineiro',
    initials: 'CAM',
  },
];

// ...

module.exports = { app, teams, express };
