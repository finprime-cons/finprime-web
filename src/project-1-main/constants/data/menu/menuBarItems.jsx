import img1 from "../../../assets/images/menubar/contact.jpg";
import img2 from "../../../assets/images/menubar/blog.jpg";
import img3 from "../../../assets/images/menubar/home.jpg";
import img4 from "../../../assets/images/menubar/about.jpg";
import img5 from "../../../assets/images/menubar/offer.jpg";
import { IoMdHome } from "react-icons/io";
import { HiMiniUserGroup } from "react-icons/hi2";
import { FaMessage } from "react-icons/fa6";
import { BiSolidOffer } from "react-icons/bi";
import { IoIosContact } from "react-icons/io";

export const menuBarItems = [
  { MenuId: 1, title: "Home", links: "/", icon: <IoMdHome />, bgImage: img3 },
  {
    MenuId: 2,
    title: "About",
    links: "/about",
    icon: <HiMiniUserGroup />,
    bgImage: img4,
  },
  {
    MenuId: 3,
    title: "Blog",
    links: "/blog",
    icon: <FaMessage />,
    bgImage: img2,
  },
  {
    MenuId: 4,
    title: "Offer",
    links: "/offer",
    icon: <BiSolidOffer />,
    bgImage: img5,
  },
  {
    MenuId: 5,
    title: "Contact Us",
    links: "/contactus",
    icon: <IoIosContact />,
    bgImage: img1,
  },
];
