import React from "react";

export const RepositoryItem = ({ repository: { name, description, link } }) => {
  return (
    <li>
      <strong>{name ?? "default"}</strong>
      <p>{description}</p>
      <a href={link} target="_blank">
        Acessar Repositório
      </a>
    </li>
  );
};
