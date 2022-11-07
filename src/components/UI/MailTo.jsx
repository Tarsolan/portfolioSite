import React from "react";

const MailTo = ({ email, subject, body, children }) => {
  return (
    <a
      href={`mailto:${email}?subject=${
        encodeURIComponent(subject) || ""
      }&body=${encodeURIComponent(body) || ""}`}
    >
      {children}
    </a>
  );
};

export default MailTo;
