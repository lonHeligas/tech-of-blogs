const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const exphbs = require('express-handlebars');
const helpers = require('./utils/helpers');
// const path = require('path');

const PORT = process.env.PORT || 3001;
const app = express();

const hbs = exphbs.create({ helpers });


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(routes);

// sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
// });