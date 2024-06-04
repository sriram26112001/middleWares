const  express=require("express");
const app=express();
//now lets do some authentification stuff
app.get("/health-checkup",function(req,res){
    const kidneyId=req.query.Kid;
    const username=req.headers.username;
    const password=req.headers.password;
    //lets do some authentification
    if(username!="sriram" && password!="pass")
    {
        console.log("user authentification failed");
        res.status(403).json({
            "message":"user authentification failed"
        });
        return;
    }
    //lets do some input validation
    if(kidneyId!=1 && kidneyId!=2)
    {
        console.log("Input validation failed");
        res.status(411).json({
            "message":"Inputs are wrong"
        });
        return;
    }
    res.send("heart is healthy");
});
let port=3000;
app.listen(port,function(){
    console.log("server is running on https://localhost:3000");
})