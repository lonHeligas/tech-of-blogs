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
      include: { all: true, nested: true, attributes: {exclude: ['password']}}
      // , {
      //   model: { Comments }      
      // }      
    // ]
    })
    const blogpost = blogData.get({ plain: true });
    const author = await Users.findOne({ 
      where: { id: blogpost.author_id}
    })
    console.log('this is the author:', blogpost)
    //console.log('this is the blogpost: ', blogpost)    
    res.render('comment', {
      author: author.get({ plain: true }),
      ...blogpost, 
      logged_in: req.session.logged_in,
    });
  } catch (error){
    res.status(500).json(error)
  }
})



router.get('/dashboard', async(req, res) => {
  // console.log(`++++++++++++++++++++++++++++++++++++++++++++++++++++++\n\n`)
  // console.log('ROUTE HIT', )
  // console.log(req.session.user_id)
  try {
    const blogData = await Blogposts.findAll({
      where: { author_id: req.session.user_id },
    })
    
    const blogs = blogData.map(blog => blog.get({plain: true}))    

    
    res.render('dashboard',{
      blogs,
      logged_in: true
    }
 );
    console.log('ROUTE HIT!!!!!!! (Hello There!)', )
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

router.get('/dashboard/postathought', (req,res) => {
  res.render('postathought')
})

router.post('/', async (req,res) => {
  try {
    const blogData = await Blogposts.create({
      title: req.body.title,
      content: req.body.content,
      author_id: req.session.user_id
    })
    res.status(200).json(blogData);
  } catch (error){
    res.status(400).json(error);
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