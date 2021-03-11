import React from "react";
import { RepositoryItem } from "./RepositoryItem";

const repository = {
  name: "unform",
  description: "forms in react",
  link: "https://www.github.com",
};

export const RepositoryList = () => {
  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        <RepositoryItem repository={repository} />
      </ul>
    </section>
  );
};
