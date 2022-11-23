import React from "react";
import styles from "./css/About.module.css";

const AWS = () => {
  return (
    <div className={styles.awsInfo}>
      <h3>Site Architecture</h3>
      <p>
        This site was designed in <i>React</i>, using Microsoft Visual Studio
        Code as my IDE. I put it online using a variety of AWS services,
        including:
      </p>
      <ul>
        <li>
          <i>Amazon Route 53</i> for domain purchase and management
        </li>
        <li>
          <i>AWS Amplify</i> to build and deploy the app
        </li>
        <li>
          An <i>Amazon S3 Bucket</i> for image hosting and access
        </li>
        <li>
          <i>Amazon ACM</i> for SSL security certification
        </li>
      </ul>
    </div>
  );
};

export default AWS;
