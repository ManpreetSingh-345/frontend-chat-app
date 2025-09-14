import React from "react";
import axios from "axios";

const App = () => {
  const getObj = async () => {
    await axios
      .get("http://localhost:8080/")
      .then((res) => console.log(res.data));
  };

  getObj();

  return <div>App</div>;
};

export default App;
