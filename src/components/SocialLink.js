const SocialLink = ({ href, iconClass, classTitle }) => {
  return (
    <li>
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={`${classTitle}-icon`}>
        <i className={iconClass}></i>
      </a>
    </li>
  );
};
export default SocialLink;
