import { socialLinks } from "../data";
import PageLinks from "./PageLinks";
import SocialLink from "./SocialLink";
const Footer = () => {
  return (
    <footer className="section footer">
      <PageLinks parentClass="footer" />

      <ul className="footer-icons">
        {socialLinks.map((link) => {
          return <SocialLink key={link.id} {...link} classTitle="footer" />;
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};
export default Footer;
