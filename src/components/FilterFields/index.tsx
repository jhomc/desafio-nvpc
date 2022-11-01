import { IFiltersApplied, Queries, Repository } from "../RepositoryContainer";
import * as S from "./styles";
interface FilterFieldsProps {
  technologies: string[];
  handleFilter: (filterFilds: IFiltersApplied) => void;
  filtersApplied: IFiltersApplied;
  orderRepositoryList: (order: keyof Queries) => void;
}

export function FilterFields({
  technologies,
  handleFilter,
  filtersApplied,
  orderRepositoryList,
}: FilterFieldsProps) {
  function handleOrderList(order: keyof Queries) {
    orderRepositoryList(order);
    handleFilter({ name: "", tech: "all", type: "all" });
  }
  return (
    <S.Wrapper>
      <S.SearchByTextInput
        type="text"
        value={filtersApplied.name}
        placeholder="Procure por um repositório"
        onChange={(event) =>
          handleFilter({ ...filtersApplied, name: event.target.value })
        }
      />

      <S.FiltersContainer>
        <span>Filtros:</span>
        <S.SearchBox
          value={filtersApplied.tech}
          placeholder="Tecnologias"
          onChange={(event) =>
            handleFilter({ ...filtersApplied, tech: event.target.value })
          }
        >
          <S.SearchOption value="all">Tecnologias</S.SearchOption>
          {technologies.map((tech) => {
            return (
              <S.SearchOption key={tech} value={tech}>
                {tech}
              </S.SearchOption>
            );
          })}
        </S.SearchBox>
        <S.SearchBox
          value={filtersApplied.type}
          placeholder="Tipo"
          onChange={({ target }) =>
            handleFilter({
              ...filtersApplied,
              type: target.value as keyof Repository,
            })
          }
        >
          <S.SearchOption value="all">Tipo</S.SearchOption>
          <S.SearchOption value="archived">Arquivado</S.SearchOption>
          <S.SearchOption value="allow_forking">Permite Fork</S.SearchOption>
          <S.SearchOption value="has_pages">Publicados</S.SearchOption>
        </S.SearchBox>
        <S.SearchBox
          defaultValue="order"
          placeholder="Ordenar"
          onChange={(event) =>
            handleOrderList(event.target.value as keyof Queries)
          }
        >
          <S.SearchOption value="order" disabled hidden>
            Ordenar
          </S.SearchOption>
          <S.SearchOption value="alphabetical">Alfabética</S.SearchOption>
          <S.SearchOption value="date">Ultimo commit</S.SearchOption>
        </S.SearchBox>
      </S.FiltersContainer>
    </S.Wrapper>
  );
}
