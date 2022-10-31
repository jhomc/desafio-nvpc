import { useEffect, useLayoutEffect, useState } from "react";
import { api } from "../../services/api";
import { FilterFields } from "../FilterFields";
import { RepositoryList } from "../RepositoryList";
import * as S from "./styles";

export interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
  language: string;
  pushed_at: string;
  archived: boolean;
  allow_forking: boolean;
  has_pages: boolean;
  all: boolean;
}

export type Queries = {
  alphabetical: string;
  date: string;
}

export interface IFiltersApplied {
  name: string;
  tech: string;
  type: keyof Repository;
}

export function RepositoryContainer() {
  const [repositoryList, setRepositoryList] = useState<Repository[]>([]);
  const [filteredList, setFilteredList] =
    useState<Repository[]>(repositoryList);
  const [technologies, setTechnologies] = useState<string[]>([]);
  const [techValue, setTechValue] = useState("all");
  const [repoType, setRepoType] = useState<keyof Repository>("all");

  const [filtersApplied, setFiltersApplied] = useState<IFiltersApplied>({
    name: "",
    tech: "all",
    type: "all",
  });

  useEffect(() => {
    api.get("/repos?per_page=100").then((response) => {
      response.data.all = true;
      setRepositoryList(response.data);
      setFilteredList(response.data);

      let allTechs: string[] = [];
      response.data.forEach((repository: Repository) => {
        if (
          allTechs.indexOf(repository.language) == -1 &&
          repository.language != null
        ) {
          allTechs.push(repository.language);
        }
      });
      setTechnologies(allTechs);
    });
  }, []);

  function filterByTech(tech: string, ar: Repository[]) {
    if (tech == "all") return ar;
    return ar.filter((repository) => repository.language == tech);
  }

  function filterByText(text: string, ar: Repository[]) {
    return ar.filter(({ name }) =>
      name.toLowerCase().includes(text.toLowerCase())
    );
  }

  function filterByType(type: keyof Repository, ar: Repository[]) {
    if (type == "all") return ar;
    return ar.filter((repository) => repository[type]);
  }

  function handleFilter(filterValues: IFiltersApplied) {
    setFiltersApplied({ ...filterValues });
  }

  useEffect(() => {
    const fullList = repositoryList;
    const filteredByText = filterByText(filtersApplied.name, fullList);
    const filteredByTech = filterByTech(filtersApplied.tech, filteredByText);
    const filteredByType = filterByType(filtersApplied.type, filteredByTech);
    setFilteredList(filteredByType!);
  }, [filtersApplied]);

  
  async function orderRepositoryList(order: keyof Queries) {
    const queries = {
      alphabetical: "per_page=100&sort",
      date: "per_page=100&sort=pushed",
    };

    const query = queries[order];
    if (!query) return;

    const { data } = await api.get(`/repos?${query}`);

    setFilteredList(data);
  }
  return (
    <S.Wrapper>
      <FilterFields
        technologies={technologies}
        handleFilter={handleFilter}
        filtersApplied={filtersApplied}
        orderRepositoryList={orderRepositoryList}
      />
      <RepositoryList repositoryList={filteredList} />
    </S.Wrapper>
  );
}
