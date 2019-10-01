import React from "react";
import axios from "axios";

const App = () => {
  const getInfo = async () => {
    try {
      const data = await axios.get("/api/data");
      console.log("data : ", data.data);
    } catch (err) {
      console.log("error : ", err);
    }
  };
  return (
    <div>
      <p>testing 123</p>
      <p>Tyler Caceres</p>
      <p>Selin Huang</p>
      <button onClick={getInfo}>click me for data</button>
    </div>
  );
};

export default App;
