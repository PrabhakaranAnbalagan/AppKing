/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
const SideBar = () => {
  const url = "https://github.com/prabhakarananbalagan";
  return (
    <aside className="col-md-2 blog-sidebar">
      <div className="p-3">
        <h4 className="font-italic">Elsewhere</h4>
        <ol className="list-unstyled">
          <li>
            <a target="_blank" href={url}>
              GitHub
            </a>
          </li>
          <li>
            <a href="#">Twitter</a>
          </li>
          <li>
            <a href="#">Facebook</a>
          </li>
        </ol>
      </div>
    </aside>
  );
};

export default SideBar;
