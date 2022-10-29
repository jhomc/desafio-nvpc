import { Button } from "../Button";
import * as S from "./styles";
interface RepositoryItemProps {
  repository: {
    name: string;
    description: string;
    html_url: string;
    language: string;
    pushed_at: string;
  };
}

export function RepositoryItem({ repository }: RepositoryItemProps) {
  return (
    <S.Wrapper>
      <S.RepositoryTitle>{repository.name}</S.RepositoryTitle>
      <S.RepositoryInfoContainer>
        <S.RepositoryContent>
          <S.RepositoryDescription>
            {repository.description
              ? repository.description
              : "Repositório para estudo"}
          </S.RepositoryDescription>
          <S.RepositoryCreatedAt>
            Ultima atualizaçao há: {repository.pushed_at}
          </S.RepositoryCreatedAt>
        </S.RepositoryContent>
        <S.RepositoryContent>
          <S.RepositoryTech>
            Principal technologia: {repository.language}
          </S.RepositoryTech>
          <Button as="a" href={repository.html_url} target="_blank">
            Acessar Repositório
          </Button>
        </S.RepositoryContent>
      </S.RepositoryInfoContainer>
    </S.Wrapper>
  );
}
