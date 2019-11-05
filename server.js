const express = require('express');

const accountsRoute = require('./routes/accountRoutes');

const server = express();

server.use(express.json());
server.use('/accounts', accountsRoute);

server.get('/', (req, res) => {
  res.status(200).send('Go to /accounts');
});

module.exports = server;