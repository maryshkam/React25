import React from "react";
import withToogle from "../../../hoc/withToogle";

const Card = ({ open, toogle }) => {
  return (
    <div>
      <h1>Card Title</h1>
      <p>CVard Content</p>
      {open && (
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
          <li>Item 4</li>
          <li>Item 5</li>
          <li>Item 6</li>
          <li>Item 7</li>
          <li>Item 8</li>
        </ul>
      )}

      <button onClick={toogle}>Show more</button>
    </div>
  );
};

export default withToogle(Card);
