const mongoose=require("mongoose");

const formSchema=new mongoose.Schema({
    username:{type:String,required:true},
    codeLang:{type:String,required:true},
    stdin:{type:String,required:true},
    sourceCode:{type:String,required:true},
    timeStamp:{type:String,required:true}
})

const formModel= mongoose.model("data",formSchema);

module.exports = {formModel};