import { useState } from "react";
import { Repository } from "../../App";
import * as S from "./styles";

interface FilterFieldsProps {
  searchRepoBytext: (tech: string, text: string) => void;
  searchByTechnology: (tech: string) => void;
  technologies: string[];
}

export function FilterFields({
  searchRepoBytext,
  searchByTechnology,
  technologies,
}: FilterFieldsProps) {
  const [textValue, setTextValue] = useState("");
  const [techValue, setTechValue] = useState("");

  function handleSearchRepoByText(text: string) {
    searchRepoBytext(text, techValue);
    setTextValue(text);
  }

  function handleSearchByTech(tech: string) {
    searchByTechnology(tech);

    setTextValue("");
    setTechValue(tech);
  }
  return (
    <S.Wrapper>
      <S.SearchByTextInput
        type="text"
        value={textValue}
        placeholder="Procure por um repositório"
        onChange={(event) => handleSearchRepoByText(event.target.value)}
      />

      <S.SearchByTechnology
        defaultValue="tecnologies"
        placeholder="Tecnologias"
        onChange={(event) => handleSearchByTech(event.target.value)}
      >
        <S.TechOption value="tecnologies" disabled hidden>
          Tecnologias
        </S.TechOption>
        <S.TechOption value="all">Todas</S.TechOption>
        {technologies.map((tech) => {
          return (
            <S.TechOption key={tech} value={tech}>
              {tech}
            </S.TechOption>
          );
        })}
      </S.SearchByTechnology>
    </S.Wrapper>
  );
}
