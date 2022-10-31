import * as S from "./styles";

export function Header() {
  return (
    <S.Wrapper>
      <S.HeaderTitle>
        Bem vindo à lista de repositórios de 
        <a href="https://www.linkedin.com/in/jhonata-martins-da-costa-66265ba7/" target="_blank">
          {' '}Jhonata M. Costa 
        </a>
      </S.HeaderTitle>
    </S.Wrapper>
  );
}
