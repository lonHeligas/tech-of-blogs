const router = require('express').Router() ;
const { User } = require('../models');
const { Blogposts, Users, Comments } = require('../models');
const withAuth = require("../utils/auth")

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
      blogs,
      logged_in: req.session.logged_in
      
    })
  } catch (error){
    res.status(500).json(error);
  }
})

router.get('/blogs/:id', async (req, res) => {
  try {
    const blogData = await Blogposts.findByPk(req.params.id, {
      include: [{
        model: Users,
        attributes: {exclude: ["password"]},
        model: Comments
      } 
      // , {
      //   model: { Comments }      
      // }      
    ]
    })
    const blogpost = blogData.get({ plain: true });
    console.log(blogpost)    
    res.render('blogpost', {
      ...blogpost,
      logged_in: req.session.logged_in,
    });
  } catch (error){
    res.status(500).json(error)
  }
})

router.get('/dashboard', async(req, res) => {
  console.log(`++++++++++++++++++++++++++++++++++++++++++++++++++++++\n\n`)
  console.log('ROUTE HIT', )
  console.log(req.session.user_id)
  try {
    const blogData = await Blogposts.findAll({
      where: { author_id: req.session.user_id },
    })
    res.status(200).json(blogData)
    res.render('dashboard');
  } catch (error){
    console.log(error);
    res.status(400).json(error);
  }
})

// router.get("/dashboard", withAuth, (req,res)=> {
//   {
//     logged_in: true
//   }
// })

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