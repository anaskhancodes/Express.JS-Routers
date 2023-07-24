
import express from 'express'
let router = express.Router()



//Get    /api /v1/feed/:userId 
router.get('https://peaceful-chaja-0720c9.netlify.app/api/v1/feed/:userId', (req, res) => {
    console.log("This is FEED => ", Date())
    res.send("This is FEED => " + Date())
  })

export default router   