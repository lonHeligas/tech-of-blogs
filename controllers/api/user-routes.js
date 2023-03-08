const router = require("express").Router();
const { Users } = require("../../models");

router.post('/', async (req, res) => {
  try {
    const userData = await Users.create(req.body);
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/login', async (req, res) => {
  try {
    console.log(`++++++++++++++++++++++++++++++++++++++++++++++++++++++\n\n`)
    console.log('LOGIN ROUTE HIT', req.body)
    const userData = await Users.findOne({ where: { email: req.body.email } });
    console.log("user Data", userData)
    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }
    const validPassword = await userData.checkPassword(req.body.password);
    console.log("IS the password valid? : ", validPassword)
    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }
    req.session.save(() => {
      console.log("SAVING A NEW SESSION!")
      req.session.user_id = userData.id;
      req.session.logged_in = true;      
      res.json({ user: userData, message: 'You are now logged in!' });
    });
  } catch (err) {
    console.log(err)
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
})

module.exports = router;
