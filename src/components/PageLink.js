const PageLink = ({ href, text, parentClass }) => {
  return (
    <li>
      <a href={href} className={`${parentClass}-link`}>
        {text}
      </a>
    </li>
  );
};
export default PageLink;
