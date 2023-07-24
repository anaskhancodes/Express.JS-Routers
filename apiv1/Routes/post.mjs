
import express from 'express'
let router = express.Router()



//Get    /api/v1/post/:userId/:postId
router.get('/api/v1/post/:userId/:postId', (req, res) => {
  console.log("Post is Created => ", Date())
  res.send("Post is Created => " + Date())
})


//Get    /posts/:userId
router.get('/posts/:userId', (req, res) => {
  console.log("Posts is Created", Date())
  res.send("Posts is Created" + Date())
})


//Post    /post
router.get('/post', (req, res) => {
  console.log("Post is Created => ", Date())
  res.send("Post is Created => " + Date())
})


//Put    /post/:userId/:postId
router.put('/post/:userId/:postId', (req, res) => {
  console.log("Post is Put => ", Date())
  res.send("Post is Put => " + Date())
})

//Delete    /post/:userId/:postId
router.delete('/post/:userId/:postId', (req, res) => {
  console.log("This Post is Delete => ", Date())
  res.send("This Post is Delete => " + Date())
})

export default router