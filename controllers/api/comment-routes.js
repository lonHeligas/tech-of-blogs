const router = require("express").Router();
const { Blogposts, Users, Comments } = require("../../models");
// console.log(`hello there from blog-routes!`)
// The `/api/categories` endpoint

router.post('/post/:id', async(req, res) => {
  try {
    const commentData = await Comments.create(
      { ...req.body, blog_id: req.params.id }
    )
    res.status(200).json(commentData);
  } catch (error){
    console.log(error);
    res.status(400).json(error);
  };
})


module.exports = router;
