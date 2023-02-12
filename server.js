console.log(`hello there`);
const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection')
// const path = require('path');

const PORT = process.env.PORT || 3001;
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);
// app.get('/', (req,res) => {
//   res.send(
//     `Hello there`
//   );
// });

// app.get('/api', (req,res) => {
//   res.send(
//     `Hello there again`
//   )
// })

sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});