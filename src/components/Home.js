import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  function clickHandler() {
    navigate("/about");
  }

  return (
    <div>
      This is home page
      <div>
        <button onClick={clickHandler}>move to about page</button>
      </div>
    </div>
  );
};

export default Home;
