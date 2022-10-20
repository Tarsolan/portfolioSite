import movieHome from "../../images/Movie1.jpg";
import movieSearch from "../../images/Movie2.png";
import castSearch from "../../images/Movie3.png";

import { FaReact } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiPostgresql } from "react-icons/si";

const movieSite = {
  buttonTitle: (
    <>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <FaReact /> <DiMongodb /> <SiPostgresql />
      </div>
      <span>Movie Website</span>
    </>
  ),
  title: "Squishy Kitty Movie Reviews",
  displayPhoto: {
    src: movieHome,
    figCaption:
      "A search function that takes advantage of a MongoDB Atlas Cluster to find missions and mission reports.",
  },
  photos: [
    {
      title: "Member Page",
      src: movieSearch,
      figCaption:
        'An image of the "All Members" page. This would call the members from a PostgreSQL server and display them here.',
    },
    {
      title: "Create Mission Page",
      src: castSearch,
      figCaption:
        "The create mission page. Clients who have logged in to the site are able to create missions that members can undertake.",
    },
  ],
  topDescription: (
    <>
      <p>
        The final project for Semester 3. A full stack web application, built in
        React. Takes advantage of a custom back-end and uses both Mongo and
        PostgreSQL! I enjoyed this project for all of the practice it provided.
        Implementing the search function and learning about Atlas was quite
        exciting.
      </p>
    </>
  ),
  botDescription: (
    <>
      <ul>
        <li>
          Users can create accounts and log in. Once logged in, users are able
          to leave scores and reviews on any movie they wish, while also being
          able to view other users' scores!
        </li>
        <li>
          The back end creates and uses a REST API with Node and Express, taking
          advantage of both MongoDB and PostgreSQL databases. The majority of
          the work on this site is done via MongoDB!
        </li>
        <li>
          Using an Atlas search index, I was able to streamline our search
          engine. It scans over 25,000 movies in a very short period of time!
        </li>
      </ul>
    </>
  ),
};

export default movieSite;
