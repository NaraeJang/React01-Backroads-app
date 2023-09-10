import { pageLinks } from "../data";

const PageLinks = ({ parentClass }) => {
  return (
    <ul className={`${parentClass}-links`} id={`${parentClass}-links`}>
      {pageLinks.map(({ id, href, text }) => {
        return (
          <li key={id}>
            <a href={href} className={`${parentClass}-link`}>
              {text}
            </a>
          </li>
        );
      })}
    </ul>
  );
};
export default PageLinks;
