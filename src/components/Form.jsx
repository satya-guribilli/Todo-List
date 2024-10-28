import React, { useState } from "react";
import "./Form.css";

function Form() {
  const [person, setDetails] = useState({
    firstname: "",
    lastname: "",
    age: "",
    Gender: "",
    profession: "",
  });
  function onsubmit() {
    console.log("Submitted");
  }
  return (
    <div id="Forms">
      <h1>
        {" "}
        {person.firstname} - {person.lastname}
      </h1>
      <form className="FormData">
        <label>FirstName : </label>
        <input
          onChange={(e) => setDetails({ ...person, firstname: e.target.value })}
          type="text"
          value={person.firstname}
        />
        <label> LastName : </label>
        <input
          onChange={(e) => setDetails({ ...person, lastname: e.target.value })}
          type="text"
          value={person.lastname}
        />
        <label> Age: </label>
        <input
          onChange={(e) => setDetails({ ...person, age: e.target.value })}
          type="number"
          value={person.age}
        />
        <label> Gender: </label>
        <input
          onChange={(e) => setDetails({ ...person, Gender: e.target.value })}
          type="text"
          value={person.Gender}
        />
        <label> Profession: </label>
        <input
          onChange={(e) =>
            setDetails({ ...person, profession: e.target.value })
          }
          type="text"
          value={person.profession}
        />
        <button type = "submit " className="submitButton" onClick={onsubmit}> Submit</button>
      </form>
    </div>
  );
}

export default Form;
