const express= require("express");
const app=express();

app.use=(express.json());

app.get("/",(req,res)=>{
    console.log("api working")
    res.send("api working now")
})

app.listen(8080, (req,res)=>{
    console.log(`running on port 5000`)
})
