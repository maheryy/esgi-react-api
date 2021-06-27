import React from "react";

const Link = ({className, href, label, children}) => {
  
  const onClick = (event) => {
    event.preventDefault();

    window.history.pushState({}, "", href);
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  return (
    <a className={className} href={href} onClick={onClick}>
      {children ?? label}
    </a>
  );
};

export default Link;
