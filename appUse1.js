const express=require("express");
const app=express();

let numberofRequest=0;

function calculateRequests(req,res,next){
    numberofRequest++;
    console.log("the Total number of request is"+numberofRequest);
    next();    
}

function userMiddleware(req,res,next)
{
    const username=req.headers.username;
    const password=req.headers.password;
    if(username!="sriram" || password!="1234")
    {
        res.status(403).json({
            "message":"username or password is wrong"
        });
    }
    else
    {
        next();
    }
}

app.use(calculateRequests,userMiddleware); //When you use app.use(calculateRequests, userMiddleware); in an Express.js application, it sets up multiple middleware functions to run in sequence for every incoming request.

app.get("/",function(req,res){
    res.send("the total number of request is"+numberofRequest);
});

let port=3000;

app.listen(port,function(){
    console.log("server is running on http://localhost:3000");    
});