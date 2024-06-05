const express=require("express");
const app=express();
app.get("/health",function(req,res){
    //here I do health check up
    const kid=req.query.kidneyId;
    const username=req.headers.username;
    const password=req.headers.password;
    //now we will do  the authentification part
    if(username!="sriram" && password!="1234")
    {
        console.log("authentification has failed due to wrong username or password");
        res.status(403).json({
            "message":"authentification has failed"
        })
        return;
    }
    //now we will do the input validation check
    if(kid!=1 || kid!=2)
    {
        console.log("wrong inputs has been written");
        res.status(411).json({
            "message":"input valiudation failed"
        });
        return;
    }
    let health_good=true;
    //now the doctor check up would be done
    if(health_good)
    {
        res.status(200).send("health is good");
    }
    
    app.listen(3000,function(req,res){
        console.log("server is operating on http://localhost:3000");
    });
})