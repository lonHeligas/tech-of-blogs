const express = require('express');
const path = require('path');

const app = express();
const PORT = 3001;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

app.get('/', (req,res) => {
  res.send(
    `Hello there`
  );
});

app.get('/api', (req,res) => {
  res.send(
    `Hello there again`
  )
})

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
  );