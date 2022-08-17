import React from "react";
import PropTypes from "prop-types";

RepoList.propTypes = {
  repos: PropTypes.array.isRequired,
};

export default function RepoList({ repos }) {
  return (
    <div className="rounded-lg shadow-lg card bg-base-100 ">
      <div className="card-body">
        <h2 className="text-3xl my-4 font-old card-title">Top Repositories</h2>
        {repos.map((repo) => (
          <h3>{repo.name}</h3>
        ))}
      </div>
    </div>
  );
}