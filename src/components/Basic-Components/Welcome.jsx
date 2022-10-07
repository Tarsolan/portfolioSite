import React from "react";
import Form from "../form-components/Form";
import { Link } from "react-router-dom";

const Welcome = ({ setName, onToggle, name, check, setCheck }) => {
  return (
    <div>
      <div className="welcomePage">
        <h2>Welcome!</h2>
        <p>
          Thanks for looking at my portfolio. Take a look at these options
          before you begin the most interesting read of your entire life.
        </p>
      </div>
      <Form setName={setName} onToggle={onToggle} setCheck={setCheck} />
      <div className="welcomePage">
        <p>
          {name === "" ? (
            "All ready to go? You should see your name right here when you're done. I wonder if you'll be cool."
          ) : (
            <span>
              {name}... An acceptable name.{" "}
              {check
                ? "Looks like you've chosen to be cool, too. Good choice."
                : "Doesn't seem like you're very cool yet. Oh well, we can still take this journey together."}
            </span>
          )}
        </p>
        <p>
          With all that out of the way...{" "}
          <Link to="/about">let's get started.</Link>
        </p>
      </div>
    </div>
  );
};

export default Welcome;
