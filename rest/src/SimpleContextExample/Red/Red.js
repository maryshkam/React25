import React from "react";
import SimpleContex from "../../context/SimpleContex";
import Blue from "../Blue/Blue";
import "./Red.css";

const Red = () => {
  return (
    <SimpleContex.Consumer>
      {(context) => (
        <div className="red">
          <p>{context.number}</p>
          <Blue />
        </div>
      )}
    </SimpleContex.Consumer>
  );
};

export default Red;
