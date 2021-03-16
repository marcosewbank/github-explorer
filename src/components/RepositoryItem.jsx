import React from "react";

export const RepositoryItem = ({
  repository: { name, description, html_url },
}) => {
  return (
    <li>
      <strong>{name ?? "default"}</strong>
      <p>{description}</p>
      <a href={html_url} target="_blank">
        Acessar Repositório
      </a>
    </li>
  );
};
