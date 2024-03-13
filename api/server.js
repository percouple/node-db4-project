const express = require('express');
const recipeRoutes = require('./recipes/recipes-routes')

const server = express();

server.use(express.json());

server.use('/api/recipes', recipeRoutes);


module.exports = server;