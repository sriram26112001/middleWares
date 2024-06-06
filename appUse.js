const express=require("express");
const app=express();

let numberofRequest=0;

function calculateRequests(req,res,next){
    numberofRequest++;
    console.log("the Total number of request is"+numberofRequest);
    next();    
}

app.use(calculateRequests);

app.get("/",function(req,res){
    res.send("the total number of request is"+numberofRequest);
});

let port=3000;

app.listen(port,function(){
    console.log("server is running on http://localhost:3000");    
});