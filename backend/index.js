const express = require("express");
const { connection } = require("./config/db");
const { formModel } = require("./model/form.model");
const app = express();
const cors=require("cors");

app.use(express.json());

app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to the Form api");
  console.log("api working");
});

// read data
app.get("/read",async(req,res)=>{
    const formData=await formModel.find();
    res.send(formData)
})


// add data usin post
app.post("/create", async (req, res) => {
  const { username, codeLang, stdin, sourceCode } = req.body;

  const timeStamp = new Date().toLocaleString();

  const formData = new formModel({
    username,
    codeLang,
    stdin,
    sourceCode,
    timeStamp,
    
  });

  try {
    await formData.save();
    res.json({ msg: "formData added" });
  } catch (err) {
    res.json({ msg: "something went wrong" });
    console.log(err);
  }
});

app.listen(8080, async () => {
  try {
    await connection;
    console.log("connected to mongoDb successfully!");
  } catch (err) {
    console.log(err);
  }
  console.log(`running on port 8080`);
});
