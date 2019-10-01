import React from "react";
import axios from "axios";

const App = () => {
  const requestData = async () => {
    try {
      const data = await axios.get("/api/data");
      console.log("data : ", data.data);
    } catch (err) {
      console.log("error : ", err);
    }
  };
  return (
    <div>
      <p>wait wurt</p>
      <button onClick={requestData}>click me</button>
    </div>
  );
};

export default App;
