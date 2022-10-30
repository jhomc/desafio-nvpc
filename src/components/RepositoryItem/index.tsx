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

function DateFormat(date: string) {
  let todayDate = new Date().getTime(); // miliseconds
  let dateCalc = todayDate - Date.parse(date); // miliseconds
  let seconds = Math.floor(dateCalc / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);

  if (hours > 24) {
    let days = Math.floor(hours / 24);
    return days >= 2 ? `${Math.trunc(days)} dias` : `${Math.trunc(days)} dia`;
  }
  return hours >= 1
    ? `${Math.trunc(hours)} horas`
    : `${Math.trunc(minutes)} minutos`;
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
            Ultima atualizaçao há: {DateFormat(repository.pushed_at)}
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
