import React, { useState } from "react";
import ShowFormData from "./ShowFormData";

const initialValue = {
  username: "",
  stdin: "",
  codeLang: "",
  sourceCode: "",
};
const FormSubmit = () => {
  const [formData, setFormData] = useState(initialValue);
  const [submitted, setShowSubmitted] = useState(false);

  console.log(formData);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    try {
      const timestamp = new Date().toLocaleString();
      const formDataWithTimestamp = { ...formData, timestamp };
      const response = await fetch("https://fair-erin-millipede-gear.cyclic.app/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDataWithTimestamp),
      });

      const result = await response.json();
      console.log("Success:", result);
      alert("Form data added Succesfully!");
      setShowSubmitted(true);
      setFormData(initialValue)
    } catch (err) {
      console.log(err);
      alert("something went wrong!")
    }
  };

  return submitted ? (
    <ShowFormData />
  ) : (
    <div className="flex  justify-center h-auto ">
      <div className="container my-4 border-4 border-blue-400  shadow-inner min-h-[80vh] w-[60%]  rounded-2xl ">
        <h1 className=" text-center text-4xl leading-loose font-bold text-sky-900">
          Form Submit
        </h1>

        <form onSubmit={handleSubmit} className="mt-10 w-full px-4">
          <label className="block font-semibold text-xl mb-8">
            Username:
            <input
              type="text"
              name="username"
              value={formData.username}
              placeholder="username"
              onChange={handleChange}
              className="border border-blue-400 w-full px-1 py-2 rounded-xl "
              required
            />
          </label>
          <br />

          <label className="block text-xl font-semibold mb-8">
            Standard Input:
            <textarea
              name="stdin"
              value={formData.stdin}
              onChange={handleChange}
              className="border border-blue-400  px-1 py-2 rounded-xl  w-full"
              rows={4}
              required
            ></textarea>
          </label>
          <br />

          <label className="block mb-8 text-xl font-semibold">
            {" "}
            Prefered Code Language:
            <select
              name="codeLang"
              value={formData.codeLang}
              onChange={handleChange}
              className="border border-blue-400 w-full px-1 py-2 rounded-xl cursor-pointer"
            >
              <option value="C++">C++</option>
              <option value="Java">Java</option>
              <option value="JavaScript">JavaScript</option>
              <option value="Python">Python</option>
            </select>
          </label>
          <br />

          <label className="block mb-8 text-xl font-semibold">
            Source Code:
            <textarea
              name="sourceCode"
              value={formData.sourceCode}
              onChange={handleChange}
              className="border border-blue-400 w-full px-1 py-2 rounded-xl "
              rows={10}
              required
            ></textarea>
          </label>
          <br />
          <br />
          <div className="flex justify-center">
            <input
              type="submit"
              value={"Submit"}
              className=" text-3xl px-20 py-2 mb-12 w-[50%] justify-center mx-8 cursor-pointer shadow-sm text-white font-semibold bg-sky-500 hover:bg-sky-700 rounded-2xl"
            />
          </div>
        </form>
        {/* if form submitted then show ShowFormData component here */}
      </div>
    </div>
  );
};

export default FormSubmit;
