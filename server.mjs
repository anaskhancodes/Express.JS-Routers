

import express from 'express';
import authRouter from "./Routes/auth.mjs";
import commentRouter from "./Routes/comments.mjs";
import feedRouter from "./Routes/feed.mjs";
import postRouter from "./Routes/post.mjs";
// import cors from "cors";


const app = express();
// app.use(express.json())
// app.use(cors())

app.use(authRouter);


  // router.use((req,res,next) =>{
  //   let token = "valid"
  //   if(token === "Valid"){
  //     next();
  //   }else{
  //     res.send({message: "Invalid Token"});
  //   }
  // });



/////////////////////    COMMENTS    //////////////////////////////////////////
app.use(commentRouter);




////////////////////      POST         //////////////////////////////////////
app.use(postRouter);






////////////////////       FEED        ///////////////////////////////////////
app.use(feedRouter);






const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Your Success  ${PORT}`)
})