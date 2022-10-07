import React from "react";

const Example = ({ photo }) => {
  return (
    <figure className="example">
      <img src={photo} alt="login page" />
      <figcaption>
        This is a screenshot of a login page that I created - it was fully
        functional, with everything saved on a simulated back end.
      </figcaption>
    </figure>
  );
};

export default Example;
