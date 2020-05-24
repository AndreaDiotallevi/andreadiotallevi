import React from "react";
import MenuItem from "./MenuItem";
import routes from "../utils/routes";

const Menu = ({ open, onClick, history }) => {
  const pathname = history.location.pathname;

  const getLinkClassName = (url) => {
    let classes = "";

    if (pathname.includes(url) && url !== "/") {
      classes += "link-active";
    } else if (pathname === "/" && url === "/") {
      classes += "link-active";
    }

    return classes;
  };

  const renderList = () => {
    if (open) {
      return (
        <ul>
          {routes.map((item, index) => (
            <MenuItem
              key={index}
              onClick={onClick}
              item={item}
              history={history}
            />
          ))}
        </ul>
      );
    } else {
      return null;
    }
  };

  return <div className="menu-component">{renderList()}</div>;
};

export default Menu;
