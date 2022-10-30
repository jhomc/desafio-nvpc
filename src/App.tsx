import { Header } from "./components/Header";

import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/global";
import theme from "./styles/theme";
import { RepositoryList } from "./components/RepositoryList";
import { FilterFields } from "./components/FilterFields";
import { useEffect, useState } from "react";
import { api } from "./services/api";

export interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
  language: string;
  pushed_at: string;
}

function App() {
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
    console.log(repositoryList);
    console.log(newList);
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
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <FilterFields
        searchRepoBytext={searchRepoBytext}
        technologies={technologies}
        searchByTechnology={searchByTechnology}
        orderRepositoryList={orderRepositoryList}
      />
      <RepositoryList repositoryList={filteredList} />
    </ThemeProvider>
  );
}

export default App;
