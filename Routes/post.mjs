
import express from 'express'
let router = express.Router()



//Get    /api/v1/post/:userId/:postId
router.get('/api/v1/post/:userId/:postId', (req, res) => {
  console.log("Post is Created => ", Date())
  res.send("Post is Created => " + Date())
})


//Get    /api/v1/posts/:userId
router.get('/api/v1/posts/:userId', (req, res) => {
  console.log("Posts is Created", Date())
  res.send("Posts is Created" + Date())
})


//Post    /api/v1/post
router.post('/api/v1/post', (req, res) => {
  console.log("Post is Created => ", Date())
  res.send("Post is Created => " + Date())
})


//Put    /api/v1/post/:userId/:postId
router.put('/api/v1/post/:userId/:postId', (req, res) => {
  console.log("Post is Put => ", Date())
  res.send("Post is Put => " + Date())
})

//Delete    /api/v1/post/:userId/:postId
router.delete('/api/v1/post/:userId/:postId', (req, res) => {
  console.log("This Post is Delete => ", Date())
  res.send("This Post is Delete => " + Date())
})

export default router