import React from "react";

const Repo = ({ repo }) => {
  const { name, html_url, description } = repo;
  return (
    <div className="repo">
      <h3>
        <a href={html_url}>{name}</a>
      </h3>
      <p>{description}</p>
     
    </div>
  );
};

export default Repo;
