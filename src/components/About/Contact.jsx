import React from "react";
import styles from "./css/About.module.css";

const Contact = ({ phone, email }) => {
  return (
    <div className={styles.contactPage}>
      <h3>Contact Info</h3>
      <p>
        I can be reached by phone at <strong>{phone}</strong>, or by email at{" "}
        <strong>{email}</strong>. Please feel free to do so at any time, for any
        reason.
      </p>
    </div>
  );
};

export default Contact;

Contact.defaultProps = {
  phone: "(709) 567-0540",
  email: "aridgeley@msn.com",
};
