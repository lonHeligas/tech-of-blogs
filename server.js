const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection')
// const path = require('path');

const PORT = process.env.PORT || 3001;
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);

// sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
// });