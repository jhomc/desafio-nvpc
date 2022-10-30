import axios from "axios";
import { useEffect, useState } from "react";
import { Repository } from "../../App";
import { api } from "../../services/api";
import { RepositoryItem } from "../RepositoryItem";
import * as S from "./styles";

export interface RepositoryListProps {
  repositoryList: Repository[];
}

export function RepositoryList({ repositoryList }: RepositoryListProps) {
  return (
    <S.Wrapper>
      {repositoryList.map((repository) => {
        return <RepositoryItem key={repository.id} repository={repository} />;
      })}
    </S.Wrapper>
  );
}
