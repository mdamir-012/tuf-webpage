import React from "react";

const ShowFormData = ({ username,stid,codeLang,sourceCode}) => {
  return (
    <div>
      <h2>Form</h2>
       <h3>Username: {username}</h3>
       <h3>Standard Input: {stid}</h3>
       <h3>Code Language: {codeLang}</h3>
       <h3>Source Code: {sourceCode}</h3>
    </div>
  );
};

export default ShowFormData;
