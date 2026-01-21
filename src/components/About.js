import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
    const navigate=useNavigate();
    function backHandler(){
        navigate(-1);
    }
  return (
  <div>
    This is about page
    <button onClick={backHandler}>go back</button>
</div>);
};

export default About;
