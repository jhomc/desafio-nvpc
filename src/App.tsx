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
    api
      .get("/repos?per_page=100", {
        headers: {
          Authorization: `Bearer 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`,
        },
      })
      .then((response) => {
        setRepositoryList(response.data);
        setFilteredList(response.data);
        console.log(response.data);

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

  // useEffect(() => {
  //   let allTechs: string[] = [];
  //   filteredList.forEach((repository: Repository) => {
  //     if (
  //       allTechs.indexOf(repository.language) == -1 &&
  //       repository.language != null
  //     ) {
  //       allTechs.push(repository.language);
  //     }
  //   });
  //   setTechnologies(allTechs);
  // }, [filteredList]);

  function searchRepoBytext(text: string, tech: string) {
    let newList: Repository[] = [];

    if (tech != "all") {
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

  function searchByTechnology(tech: string) {
    let newList = repositoryList.filter((repository) => {
      if (tech == "all") {
        return repository;
      } else {
        return repository.language == tech;
      }
    });

    setFilteredList(newList);
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <FilterFields
        searchRepoBytext={searchRepoBytext}
        technologies={technologies}
        searchByTechnology={searchByTechnology}
      />
      <RepositoryList repositoryList={filteredList} />
    </ThemeProvider>
  );
}

export default App;
