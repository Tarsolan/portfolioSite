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
    src: "https://alex-guild-images.s3.amazonaws.com/sqooshed/portfolio/moviePage/Movie1.jpg",
    figCaption:
      "A search function that takes advantage of a MongoDB Atlas Cluster to find missions and mission reports.",
  },
  photos: [
    {
      title: "Movie Search",
      src: "https://alex-guild-images.s3.amazonaws.com/sqooshed/portfolio/moviePage/Movie2.jpg",
      figCaption:
        'The output of a search for the word "Friday". It also would be able to tell if the word was spelled wrong (fuzzy searching)!',
    },
    {
      title: "Actor Search",
      src: "https://alex-guild-images.s3.amazonaws.com/sqooshed/portfolio/moviePage/Movie3.jpg",
      figCaption:
        'Search output when searching for "Will Smith". All of the top search results are movies that contain the actor/actress you\'re looking for.',
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
