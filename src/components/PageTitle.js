import React from "react";

const pageTitles = {
  "/dev": "My Software Development Projects",
  "/contact": "About Me",
};

const PageTitle = ({ history }) => {
  if (history.location.pathname === "/") {
    return null;
  }

  return (
    <div className="page-title-component">
      <h2 className="page-title">{pageTitles[history.location.pathname]}</h2>
    </div>
  );
};

export default PageTitle;
