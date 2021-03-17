interface RepositoryItemProps {
  repository: {
    name: string;
    description: string;
    html_url: string;
  };
}

export const RepositoryItem = ({ repository }: RepositoryItemProps) => {
  const { name, description, html_url } = repository;

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
