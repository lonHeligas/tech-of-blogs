const router = require("express").Router();
const { Blogposts, Users, Comments } = require("../../models");
const withAuth = require("../../utils/auth");  
// ^ do I need this?

// console.log(`hello there from blog-routes!`)


router.get('/', async(req, res) => {  
  try {
    console.log('find all', req.body)
    const blogData = await Blogposts.findAll()
    res.status(200).json(blogData);
  } catch (error){
    console.log(error);
    res.status(400).json(error);
  };
})


// ^ find all posts by a particular author (it's coming up undefined)
router.get('/author/:id', async(req, res) => {
  try {
    console.log(`++++++++++++++++++++++++++++++++++++++++++++++++++++++\n\n`)
    console.log('ROUTE HIT', req)
    const blogData = await Blogposts.findAll({
      where: { author_id: req.params.author_id },
    })
    res.status(200).json(blogData)
  } catch (error){
    console.log(error);
    res.status(400).json(error);
  }
})

router.get('/:id', async(req, res) => {
  try {
    console.log(`----------------------\n\n${req.body}`)
    const blogData = await Blogposts.findOne({
      where: { id: req.params.id },
      include: [{ model: Comments }],
    })
  
    res.status(200).json(blogData)
  } catch  (error){
    console.log(error);
    res.status(400).json(error);
  }
})



router.post('/post', async (req, res) => {
  try {
    const blogData = await Blogposts.create(
      req.body
    ) 
    res.status(200).json(blogData);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
})

module.exports = router;
