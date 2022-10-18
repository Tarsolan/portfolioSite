import React from "react";
import Example from "../UI/Example";

const WorkExample = ({ details }) => {
  const { title, topDescription, botDescription, displayPhoto, photos } =
    details;
  return (
    <div>
      <h3>{title}</h3>
      <>{topDescription}</>
      <Example
        photo={displayPhoto.src}
        captionText={displayPhoto.figCaption}
        altText={title}
      />
      <>{botDescription}</>
      {photos.length > 0 && (
        <>
          {photos.map((photo) => {
            return (
              <Example
                photo={photo.src}
                captionText={photo.figCaption}
                altText={title}
              />
            );
          })}
        </>
      )}
    </div>
  );
};

export default WorkExample;
