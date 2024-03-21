import React, { useEffect, useState } from "react";

const ShowFormData = () => {
  const [displayFormData, setDisplayFormData] = useState([]);

  const fetchDataFromApi = async () => {
    try {
      let response = await fetch(`http://localhost:8080/read`);
      let data = await response.json();
      console.log(data);
      setDisplayFormData(data);
    } catch (err) {
      console.log(err);
    }
  };

  console.log(displayFormData);

  useEffect(() => {
    fetchDataFromApi();
  }, []);

  return (
    <div className="flex justify-center h-full border-2 border-black">
      
      <div className="  border-2 px-8 py-4 my-2 border-gray-400 w-[60%]  mt-16 mb-4 mx-8 rounded-md">
      <button >Back</button>
      <h2 className="text-center my-4 text-4xl text-sky-900 underline">Form Data</h2>
        {displayFormData.map((elem) => (
          <div key={elem._id} className=" rounded-md shadow-md pl-4">
            <h3 className="text-2xl  py-2">Username: {elem.username}</h3>
            <h3 className="text-2xl  py-2">Standard Input: {elem.stid}</h3>
            <h3 className="text-2xl  py-2">Code Language: {elem.codeLang}</h3>
            <h3 className="text-2xl  py-2">Source Code: {elem.sourceCode}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowFormData;
