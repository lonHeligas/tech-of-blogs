const router = require('express').Router() ;
const { User } = require('../models');
const { Blogposts } = require('../models');
const { Comments } = require('../models');

router.get('/', async (req, res) => {
  try {
    const blogData = await Blogposts.findAll({    
    });
    res.render('homepage', {
      blogData,})
  } catch (error){
    res.status(500).json(error);
  }
})

module.exports = router;