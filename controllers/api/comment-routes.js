const router = require("express").Router();
const { Blogposts, Users, Comments } = require("../../models");
const withAuth = require("../../utils/auth")
// console.log(`hello there from comment-routes!`)
// The `/api/categories` endpoint

router.post('/', withAuth, async(req, res) => {
  try {
      // console.log(`++++++++++++++++++++++++++++++++++++++++++++++++++++++\n\n`)
      // console.log('COMMENT', req.body)
    const commentData = await Comments.create(
      { ...req.body, commentauthor_id: req.session.user_id }
    )
    res.status(200).json(commentData);
  } catch (error){
    console.log(error);
    res.status(400).json(error);
  };
})

module.exports = router;
