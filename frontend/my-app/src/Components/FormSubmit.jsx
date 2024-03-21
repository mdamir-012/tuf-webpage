import React, { useState } from "react";
import ShowFormData from "./ShowFormData";

const initialValue={
  username:"",
  stid:"",
  codeLang:"",
  sourceCode:""
}
const FormSubmit = () => {
  const [formData,setFormData]=useState(initialValue);
  const [showForm,setShowForm] =useState(false);

  console.log(formData);

  const handleChange=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(formData)
    setShowForm(!showForm)

  }

  return (
    <div className="">
      <h1 className=" text-center text-4xl leading-loose font-bold text-sky-900">Form Submit with Code</h1>
      <form onSubmit={handleSubmit} className="px-12 py-10">
        <label  className="font-semibold text-xl">Username:</label>
        <input type="text" name="username" value={formData.username} placeholder="username" onChange={handleChange}/><br />

        <label className="text-xl font-semibold">Standard Input:</label>
        <textarea name="stid" value={formData.stid} onChange={handleChange} required></textarea><br />

        <label className="text-xl font-semibold"> Prefered Code Language:</label>
        <select name="codeLang" value={formData.codeLang}  onChange={handleChange}>
          <option value="C++">C++</option>
          <option value="Java">Java</option>
          <option value="JavaScript">JavaScript</option>
          <option value="Python">Python</option>
        </select><br />

        <label className="text-xl font-semibold">Source Code:</label>
        <textarea name="sourceCode" value={formData.sourceCode}   onChange={handleChange} required></textarea><br /><br />
        <input type="submit" value={"Submit"} className="text-3xl px-20 py-4 shadow-sm shadow-blue-500/50 font-bold bg-blue-400 rounded-2xl"/>
      </form>
       {/* if form submitted then show ShowFormData component here */}
       {showForm?<ShowFormData {...formData}/>:""}
    </div>
  );
};

export default FormSubmit;
