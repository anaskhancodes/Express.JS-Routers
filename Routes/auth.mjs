import express from 'express'
let router = express.Router()



router.post('/api/v1/login', (req, res) => {
  console.log("You're Login! => ", Date())
  res.send("You're Login! =>" + Date())
})

router.post('/api/v1/SignUp', (req, res) => {
  console.log("You're SignUp => ", Date())
  res.send("You're SignUp => " + Date())
})

export default router 