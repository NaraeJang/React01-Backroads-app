import { pageLinks } from "../data";
import PageLink from "./PageLink";

const PageLinks = ({ parentClass }) => {
  return (
    <ul className={`${parentClass}-links`} id={`${parentClass}-links`}>
      {pageLinks.map((link) => {
        return <PageLink key={link.id} {...link} parentClass={parentClass} />;
      })}
    </ul>
  );
};
export default PageLinks;
