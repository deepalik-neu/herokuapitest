const express=require("express");
const app=express();
let port=process.env.PORT || 3000;
const data=require("./data.json");

app.get("/",(req,res)=>{
    res.send("Hello world!");
})

app.get("/players",(req,res)=>
{
    res.send(data);
})

app.listen(port,()=>
{
    console.log("Listening on port:"+port);
})