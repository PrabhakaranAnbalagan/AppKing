import React from "react";

const OtherApps = () => {
  const url = "http://angular.appking.online/";
  const mvcUrl = "http://mvc.appking.online/";
  return (
    <aside className="col-md-2 blog-sidebar">
      <div className="p-3">
        <h4 className="font-italic">Other Applications</h4>
        <ol className="list-unstyled">
          <li>
            <a target="_blank" href={url}>
              Angular
            </a>
          </li>
          <li>
            <a target="_blank" href={mvcUrl}>
              MVC
            </a>
          </li>
        </ol>
      </div>
    </aside>
  );
};

export default OtherApps;
