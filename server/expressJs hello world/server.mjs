

import express from 'express';
import authRouter from ".\Routes\auth.mjs";
import commentRouter from ".\Routes\comments.mjs";
import feedRouter from ".\Routes\feed.mjs";
import postRouter from ".\Routes\post.mjs";


const app = express();

app.use(authRouter);


app.use((req,res,next) =>{
  if(token === "Valid"){
    next();
  }else{
    res.send({message: "Invalid Token"});
  }
});



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
