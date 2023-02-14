const router = require('express').Router() ;
const { User } = require('../models');
const { Blogposts, Users, Comments } = require('../models');

router.get('/', async (req, res) => {
  try {
    const blogData = await Blogposts.findAll({ 
      include: {
        model: Users,
        attributes: {exclude: ["password"]}
      }
    });
    // console.log(blogData)
    const blogs = blogData.map(blog => blog.get({plain: true}))    
    // console.log("*+++++++++++++++++++++++++++++++++++++++++++++++")    
    // console.log(blogs)
    res.render('homepage', {
      blogs
    })
  } catch (error){
    res.status(500).json(error);
  }
})

router.get('/blogs/:id', async (req, res) => {
  try {
    const blogData = await Blogposts.findByPk(req.params.id, {})
    const blogpost = blogData.get({ plain: true });

    res.render('blogpost', {
      ...blogpost,
      logged_in: req.session.logged_in
    });
  } catch (error){
    res.status(500).json(error)
  }
})

router.get('/login', (req,res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  res.render('login');
})

router.get('/signup', (req,res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  res.render('signup');
  })



module.exports = router;