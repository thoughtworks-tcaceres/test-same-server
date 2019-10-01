import React from "react";
import axios from "axios";

const App = () => {
  const btnClick = async () => {
    try {
      console.log("i am here");
      const data = await axios.get("/data");
      console.log("data : ", data.data);
    } catch (error) {
      console.log("error : ", error);
    }
  };

  return (
    <div className="App">
      <p>hello world!!</p>
      <button onClick={btnClick}>clck on me</button>
    </div>
  );
};

export default App;
