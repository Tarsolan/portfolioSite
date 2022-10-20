import loginshot from "../../images/loginsmall.png";
import productPage from "../../images/FlowerScreen2.png";
import { FaReact } from "react-icons/fa";
import { SiNodedotjs } from "react-icons/si";

const flowerShop = {
  buttonTitle: (
    <>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <FaReact /> <SiNodedotjs />
      </div>
      <span>Flower Shop</span>
    </>
  ),
  title: "Flower Shop Project",
  displayPhoto: {
    src: loginshot,
    figCaption:
      "My final project for Semester 2. I was tasked with creating a mock store front in React.",
  },
  photos: [
    {
      title: "Product Page",
      src: productPage,
      figCaption:
        "A sample of the product page! We had several flower categories available for purchase.",
    },
  ],
  topDescription: (
    <>
      <p>
        Our group had to create a mock storefront in the form of a React App. We
        had not really learned how to properly use React at this point, so I had
        to figure it out by myself (using the magic of the internet, of course)!
        This was a fantastic learning experience - I walked away feeling quite
        comfortable with using React for web development.
      </p>
    </>
  ),
  botDescription: (
    <>
      <ul>
        <li>
          A login feature for users. No major authentication or security
          features, but users could create accounts and save information to a
          simulated back end.
        </li>
        <li>
          A "remember me" feature for logged in users, so that the same user
          would be remembered on a future visit
        </li>
        <li>
          A fully functional shopping cart - saved per user and persistant
          between visits
        </li>
      </ul>
    </>
  ),
};

export default flowerShop;
