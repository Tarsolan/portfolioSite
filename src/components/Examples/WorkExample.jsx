import React from "react";
import { Link } from "react-router-dom";
import Example from "../UI/Example";
import styles from "./css/WorkExample.module.css";
import guildPage from "./projects/guildPage";

const WorkExample = ({ currentExample, setShowSidebar }) => {
  if (currentExample !== undefined) {
    var { title, topDescription, botDescription, displayPhoto, photos } =
      currentExample;
  }

  return (
    <>
      {currentExample !== undefined && (
        <div>
          <h3>
            {title}
            {currentExample.example && (
              <>
                {" "}
                -{" "}
                {currentExample.example.split("")[0] === "/" ? (
                  <Link
                    to={currentExample.example}
                    onClick={() => setShowSidebar(false)}
                  >
                    Give it a try!
                  </Link>
                ) : (
                  <a
                    href={currentExample.example}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Go to this site!
                  </a>
                )}
              </>
            )}
          </h3>
          <>{topDescription}</>

          <br />
          <Example
            photo={displayPhoto.src}
            captionText={displayPhoto.figCaption}
            altText={title}
          />
          <br />

          <h4>Features:</h4>
          <>{botDescription}</>

          {photos.length > 0 ? (
            <>
              <hr />
              <h4>Additional Images</h4>
              <div className={styles.exampleContainer}>
                {photos.map((photo, i) => {
                  return (
                    <div className={styles.example} key={i}>
                      <h3 style={{ textAlign: "center" }}>{photo.title}</h3>
                      <Example
                        photo={photo.src}
                        captionText={photo.figCaption}
                        altText={photo.title}
                      />
                    </div>
                  );
                })}
              </div>
            </>
          ) : (
            <>
              <hr />
            </>
          )}
        </div>
      )}
    </>
  );
};

export default WorkExample;

WorkExample.defaultProps = {
  currentExample: guildPage,
};
