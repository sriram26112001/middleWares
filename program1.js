const express=require("express");
const app=express();
//middleware implementation for authentification and user input validation

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

function kidneyMiddleWare(req,res,next)
{
    const kidneyId=parseInt(req.query.kidneyId);
    if(kidneyId!=1 && kidneyId!=2)
    {
        res.status(411).json({
            "message":"user input are wrong"
        });
    }
    else
    {
        next();
    }
}
//HTTP request
app.get("/",userMiddleware,kidneyMiddleWare,function(req,res){
    res.send("your heart is healthy");
});

app.put("/put",function(req,res){
    res.send("your damaged heart has been replaced by a new one");
});

let port=3000;

app.listen(port,function()
{
    console.log("server is running on http://localhost:3000");
});