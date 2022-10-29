import axios from "axios";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { RepositoryItem } from "../RepositoryItem";
import * as S from "./styles";

interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
  language: string;
  pushed_at: string;
}

export function RepositoryList() {
  const [respositoryList, setRepositoryList] = useState<Repository[]>([]);
  useEffect(() => {
    api.get("/repos?per_page=100").then((response) => {
      setRepositoryList(response.data);
      console.log(response.data);
    });
  }, []);
  return (
    <S.Wrapper>
      {respositoryList.map((repository) => {
        return <RepositoryItem key={repository.id} repository={repository} />;
      })}
    </S.Wrapper>
  );
}
