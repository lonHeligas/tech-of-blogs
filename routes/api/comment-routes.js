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

// router.get("/", async (req, res) => {
//   try {
//     const categoryData = await Category.findAll({
//       include: [{ model: Product }],
//     });
//     res.json(categoryData);
//   } catch (error) {
//     console.log(error);
//     res.status(400).json(error);
//   }
// });

// router.get("/:id", async (req, res) => {
//   try {
//     const categoryData = await Category.findOne({
//       where: { id: req.params.id },
//       include: [{ model: Product }],      
//     });
//     res.json(categoryData);
//   } catch (error) {
//     console.log(error);
//     res.status(400).json(error);
//   }
//   // * find one category by its `id` value
//   // * be sure to include its associated Products
// });

// router.post("/", async (req, res) => {
//   // * create a new category
//   try {
//     // console.log(`look here: ${req.body.category_name}`)    
//     const categoryData = await Category.create({
//      category_name: req.body.category_name,
//     })
//     res.json(categoryData);    
//   } catch (error) {
//     console.log(error);
//     res.status(400).json(error);
//   }
// });

// router.put("/:id", async (req, res) => {
//   // * update a category by its `id` value
//   try {
//     const categoryData = await Category.findOne({
//       where: { id: req.params.id },
//     });
//     await categoryData.update({ category_name: req.body.category_name 
//     })
//     res.json(categoryData)  
//   } catch (error) {
//     console.log(error);
//     res.status(400).json(error);
//   }       
// });

// router.delete("/:id", async (req, res) => {
//   // * delete a category by its `id` value
//   try {
//     await Category.destwoy({
//       where: { id: req.params.id },
//     })
//     res.status(204).send('');
//   } catch (error) {
//     console.log(error);
//     res.status(400).json(error);
//   }
// });

module.exports = router;
