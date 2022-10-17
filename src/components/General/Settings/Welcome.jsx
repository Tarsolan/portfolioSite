import React from "react";
import WelcomeForm from "./WelcomeForm";
import { Link } from "react-router-dom";
import styles from "./css/Form.module.css";

const Welcome = ({ name, check, themePackage }) => {
  return (
    <div>
      <div className={styles.welcomePage}>
        <h2>Welcome!</h2>
        <p>
          Thanks for looking at my portfolio. Take a look at these options
          before you begin the most interesting read of your entire life.
        </p>
      </div>
      <div className={styles.formHeader}>
        <h3>Customization Page</h3>
        <p>
          Here, you can customize certain aspects of the page. The name you
          enter here will be displayed in several of the components of the site,
          and there are a few color options to choose from as well.
        </p>
      </div>
      <WelcomeForm themePackage={themePackage} />
      <div className={styles.welcomePage}>
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
