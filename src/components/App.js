import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "../App.css";

function App() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = () => {
    setName("");
    setDate("");
    navigate("/bday");
  };

  const onSubmit = () => {
    if (name === "" || date === "") {
      toast("Mundhu Fill cheyyi", { type: "warning" });
      return;
    }
    if (name !== "Kothi" && date !== "2002-11-02") {
      toast("Rendu thappe...try again", { type: "error" });
      return;
    }
    if (name !== "Kothi") {
      toast("Name thappu! Malli try cheyyi", { type: "error" });
      return;
    }
    if (date !== "2002-11-02") {
      toast("Ni DOB kuda thelidha neeku...", { type: "error" });
      return;
    }

    handleSubmit();
  };

  return (
    <div className="App">
      <h1 className="heading">Helloo!!!</h1>
      <div className="app-wrapper">
        <div className="name-wrapper">
          Name :{" "}
          <input
            type="text"
            className="input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="date-wrapper">
          DOB :{" "}
          <input
            type="date"
            className="input date-input"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="submit-wrapper">
          <button className="submit-btn" onClick={onSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
