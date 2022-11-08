import { FaReact } from "react-icons/fa";
import { SiPostgresql } from "react-icons/si";

const guildPage = {
  buttonTitle: (
    <>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <FaReact /> <SiPostgresql />
      </div>
      <span>Guild Page</span>
    </>
  ),
  title: "Information Website for the Adventurer's Guild",
  displayPhoto: {
    src: "https://alex-guild-images.s3.amazonaws.com/sqooshed/portfolio/guild/Guild3.jpg",
    figCaption:
      "A search function that takes advantage of a MongoDB Atlas Cluster to find missions and mission reports.",
  },
  photos: [
    {
      title: "Member Page",
      src: "https://alex-guild-images.s3.amazonaws.com/sqooshed/portfolio/guild/Guild2.jpg",
      figCaption:
        'An image of the "All Members" page. This would call the members from a PostgreSQL server and display them here.',
    },
    {
      title: "Create Mission Page",
      src: "https://alex-guild-images.s3.amazonaws.com/sqooshed/portfolio/guild/Guild4.jpg",
      figCaption:
        "The create mission page. Clients who have logged in to the site are able to create missions that members can undertake.",
    },
  ],
  topDescription: (
    <>
      <p>
        I had a lot of fun making this one. Easily my most ambitious personal
        project, this was my attempt at building a full stack React website. One
        of my biggest hobbies is LARPing, and in that LARP, we have a Guild. I
        thought it would be a very fun experiment to try and create an interface
        for that Guild and put it online. A useful tool for us to keep track of
        the missions and mission reports that we often undertake.
      </p>
      <p>
        Eventually, that expanded into including the members as well. Now
        everyone involved can come to the site, create an account, and add to
        their member profiles. There are a lot of other features I plan to add
        to this as I learn!
      </p>
    </>
  ),
  botDescription: (
    <>
      <ul>
        <li>
          This site runs on an EC2 instance. There's no SSL certificate yet, so
          not everyone can connect. I need to set up a Load Balance to redirect
          traffic to my own domain! Working on this now.
        </li>
        <li>
          Both users and clients are able to create accounts and log in. All
          user data is stored on the PG server, and all authentication is
          handled securely on the back end.
        </li>
        <li>
          The back end creates and uses a REST API with Node and Express, taking
          advantage of both MongoDB and PostgreSQL databases.
        </li>
        <li>
          Next phase of this will be adding proper security authentication to
          the logins!
        </li>
      </ul>
    </>
  ),
  example: "https://guildsite.aridgeleyportfolio.ca",
};

export default guildPage;
