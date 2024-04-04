import FooterLogo from "@/assets/logo BeeAver.svg";
import NewsLetter from "@/components/NewsLetter/NewsLetter";
import LocatioIcon from "@/assets/location-icon.svg";
import PhoneIcon from "@/assets/phone-icon.svg";
import MailIcon from "@/assets/mail-icon.svg";
import LinkendInIcon from "@/assets/linkedin icon.svg";
import FacebookIcon from "@/assets/facebook-icon.svg";
import InstagramIcon from "@/assets/instagram icon.svg";
import leftArrow from "@/assets/right-arrow-svgrepo-com.svg";
import HamIcon from "@/assets/burger-list-menu-navigation-svgrepo-com.svg";
import Mainlogo from "@/assets/next.svg";

export const footerData = {
  newsletterForm: NewsLetter,
  logo: [
    {
      image: FooterLogo,
      href: "/",
    },
  ],
  hasContactForm: true,

  columns: [
    {
      title: "Important Links",
      flex: false,

      links: [
        {
          logo: "",
          text: "About us",
          href: "/about",
        },
        {
          logo: "",
          text: "Our Services",
          href: "/about",
        },
        {
          logo: "",
          text: "Our Products",
          href: "/about",
        },
        {
          logo: "",
          text: "Our Team",
          href: "/about",
        },
      ],
    },
    {
      title: "Contact Us",
      flex: false,

      links: [
        {
          logo: PhoneIcon,
          text: "+977 9865992256",
          href: "/contact",
        },
        {
          logo: MailIcon,
          text: "contact@beeaver.co",
          href: "/contact",
        },
        {
          logo: LocatioIcon,
          text: "Kumaripati, Lalitpur",
          href: "/contact",
        },
      ],
    },
    {
      title: "Get In Touch",
      flex: true,
      links: [
        {
          logo: InstagramIcon,
          text: "",
          href: "/contact",
        },
        {
          logo: LinkendInIcon,
          text: "",
          href: "/contact",
        },
        {
          logo: FacebookIcon,
          text: "",
          href: "/contact",
        },
      ],
    },
  ],
};

export const navData = {
  logo: {
    image: Mainlogo,
    href: "/",
  },

  hamIcon: HamIcon,
  contactBtn: {
    text: "Let's Talk",
    icon: leftArrow,
    href: "/contact",
  },

  navLinks: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About Us",
      href: "/about",
    },
    {
      title: "Sevices",
      href: "/service",
    },
    {
      title: "Blog",
      href: "/blog",
    },
  ],
};
