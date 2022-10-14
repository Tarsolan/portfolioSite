import React from "react";
import whatIf from "./what-if.jpg";
import styles from "./css/About.module.css";

const Hobbies = () => {
  return (
    <article className={styles.hobbies}>
      <h3>Hobbies</h3>
      <p>
        I, like so many others before me, have been known to have hobbies. Since
        you're graciously devoting your time to getting to know me, I'll outline
        a few of the highlights for you here:
      </p>
      <ul>
        <li>
          This may seem obvious, but I really enjoy Software Development. I
          can't wait to get out into the world and start coding for real.
        </li>
        <li>
          I play a lot of video games - personally a fan of anything in that I
          can really immerse myself. My real vice is the long-form JRPG style
          game - something that can take a month or two to beat with me playing
          it a couple hours here and there.
        </li>
        <li>I play Dungeons and Dragons, two evenings a week.</li>
        <li>
          If I wasn't already a big enough nerd for you, I also LARP! That
          stands for Live Action Role Playing. Between 30 to 50 (and counting)
          of us go out into the woods for six weekends a year, assume the role
          of our characters, and let loose. It's a lot of fun, and if you,
          reader, are interested in the idea, ask me about it any time. Just
          expect me to ask about a job at some point in that conversation.
        </li>
      </ul>
      <figure>
        <img src={whatIf} alt="Me, hopefully" />
        <figcaption>
          This is me, if you give me a job. Look at how productive I am.
        </figcaption>
      </figure>
    </article>
  );
};

export default Hobbies;
