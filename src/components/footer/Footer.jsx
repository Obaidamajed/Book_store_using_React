import AboutUs from "./AboutUs";
import Contact from "./Contact";
import "./footer.css";
import Icons from "./Icons";
import Links from "./Links";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-social-media">
        <div className="footer-social-medai-text">Follow us on social media</div>
        <Icons />
      </div>
      <div className="footer-links-wrapper">
        <Links />
        <Contact />
        <AboutUs />
      </div>
    </footer>
  );
};

export default Footer;