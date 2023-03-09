const router = require("express").Router();
const { Blogposts, Users, Comments } = require("../../models");
const withAuth = require("../../utils/auth");  
// ^ do I need this?



router.get('/', async(req, res) => {  
  
  console.log('find all', req.body)
  try {
    const blogData = await Blogposts.findAll()
    res.status(200).json(blogData);
  } catch (error){
    console.log(error);
    res.status(400).json(error);
  };
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
