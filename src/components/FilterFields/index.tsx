import { useState } from "react";
import * as S from "./styles";

interface FilterFieldsProps {
  searchRepoBytext: (tech: string, text: string) => void;
  searchByTechnology: (tech: string, text: string) => void;
  orderRepositoryList: (order: string) => void;
  technologies: string[];
}

export function FilterFields({
  searchRepoBytext,
  searchByTechnology,
  orderRepositoryList,
  technologies,
}: FilterFieldsProps) {
  const [textValue, setTextValue] = useState("");
  const [techValue, setTechValue] = useState("");

  function handleSearchRepoByText(text: string) {
    searchRepoBytext(text, techValue);
    setTextValue(text);
  }

  function handleSearchByTech(tech: string) {
    searchByTechnology(tech, textValue);

    setTechValue(tech);
  }

  function handleOrderList(order: string) {
    orderRepositoryList(order);
  }
  return (
    <S.Wrapper>
      <S.SearchByTextInput
        type="text"
        value={textValue}
        placeholder="Procure por um repositório"
        onChange={(event) => handleSearchRepoByText(event.target.value)}
      />

      <S.FiltersContainer>
        <span>Filtros:</span>
        <S.SearchBox
          defaultValue="tecnologies"
          placeholder="Tecnologias"
          onChange={(event) => handleSearchByTech(event.target.value)}
        >
          <S.SearchOption value="tecnologies" disabled hidden>
            Tecnologias
          </S.SearchOption>
          <S.SearchOption value="all">Todas</S.SearchOption>
          {technologies.map((tech) => {
            return (
              <S.SearchOption key={tech} value={tech}>
                {tech}
              </S.SearchOption>
            );
          })}
        </S.SearchBox>
        <S.SearchBox
          defaultValue="type"
          placeholder="Tipo"
          onChange={(event) => handleSearchByTech(event.target.value)}
        >
          <S.SearchOption value="type" disabled hidden>
            Tipo
          </S.SearchOption>
          <S.SearchOption>Arquivado</S.SearchOption>
          <S.SearchOption>Permite Fork</S.SearchOption>
          <S.SearchOption>Publicados</S.SearchOption>
        </S.SearchBox>
        <S.SearchBox
          defaultValue="order"
          placeholder="Ordenar"
          onChange={(event) => handleOrderList(event.target.value)}
        >
          <S.SearchOption value="order" disabled hidden>
            Ordenar
          </S.SearchOption>
          <S.SearchOption value="alphabetical">Alfabetica</S.SearchOption>
          <S.SearchOption value="date">Ultimo commit</S.SearchOption>
        </S.SearchBox>
      </S.FiltersContainer>
    </S.Wrapper>
  );
}
