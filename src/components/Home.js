import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Home() {
  const navigate = useNavigate();

  const onNext = () => {
    navigate("/wishes");
  };

  return (
    <div className="home">
      <h2 className="title-txt">Happy Birthday Tapaswi🥰🤩🥳</h2>
      <div className="title-img">
        <img
          src={require("./images/tapas-1.jpg")}
          alt="pic"
          className="img-1"
        />
      </div>
      <div className="text-wrap">
        Cheers to your personal new year! Let's live it up.
      </div>
      <div className="submit-wrapper">
        <button className="submit-btn-2" onClick={onNext}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Home;
