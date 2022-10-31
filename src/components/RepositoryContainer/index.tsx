import { useEffect, useState } from "react";
import { Repository } from "../../App";
import { api } from "../../services/api";
import { FilterFields } from "../FilterFields";
import { RepositoryList } from "../RepositoryList";
import * as S from "./styles";

export function RepositoryContainer() {
  const [repositoryList, setRepositoryList] = useState<Repository[]>([]);
  const [filteredList, setFilteredList] =
    useState<Repository[]>(repositoryList);
  const [technologies, setTechnologies] = useState<string[]>([]);

  useEffect(() => {
    api.get("/repos?per_page=100").then((response) => {
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

  function searchRepoBytext(text: string, tech: string) {
    let newList: Repository[] = [];

    if (tech != "all" && tech) {
      newList = repositoryList.filter((repository) => {
        return (
          repository.name.toLowerCase().includes(text.toLowerCase()) &&
          repository.language == tech
        );
      });
    } else {
      newList = repositoryList.filter((repository) => {
        return repository.name.toLowerCase().includes(text.toLowerCase());
      });
    }
    setFilteredList(newList);
  }

  function searchByTechnology(tech: string, text: string) {
    let newList: Repository[] = [];

    if (text != "") {
      if (tech == "all") {
        newList = repositoryList.filter((repository) => {
          return repository.name.toLowerCase().includes(text.toLowerCase());
        });
      } else {
        newList = repositoryList.filter((repository) => {
          return (
            repository.language == tech &&
            repository.name.toLowerCase().includes(text.toLowerCase())
          );
        });
      }
    } else {
      newList = repositoryList.filter((repository) => {
        if (tech == "all") {
          return repository;
        } else {
          return repository.language == tech;
        }
      });
    }
    setFilteredList(newList);
  }

  function searchByType(type: string, tech: string, text: string) {
    let newList: Repository[] = [];

    newList = repositoryList.filter((repository) => {
      switch (type) {
        case "all":
          return repository;
        case "archived":
          return repository.archived;
        case "fork":
          return repository.allow_forking;
        case "hasPage":
          console.log("oi");
          return repository.has_pages;
        default:
          return;
      }
    });

    setFilteredList(newList);
  }

  function orderRepositoryList(order: string) {
    let urlQuery;
    switch (order) {
      case "alphabetical":
        urlQuery = "per_page=100&sort";
        break;
      case "date":
        urlQuery = "per_page=100&sort=pushed";
        break;
      default:
        return;
    }

    api.get(`/repos?${urlQuery}`).then((response) => {
      setFilteredList(response.data);
    });
  }
  return (
    <S.Wrapper>
      <FilterFields
        searchRepoBytext={searchRepoBytext}
        technologies={technologies}
        searchByTechnology={searchByTechnology}
        orderRepositoryList={orderRepositoryList}
        searchByType={searchByType}
      />
      <RepositoryList repositoryList={filteredList} />
    </S.Wrapper>
  );
}
