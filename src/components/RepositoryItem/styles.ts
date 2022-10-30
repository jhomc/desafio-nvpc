import styled, { css } from "styled-components";

export const Wrapper = styled.ul`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    margin-bottom: ${theme.spacings.medium};
    padding-bottom: ${theme.spacings.small};
    border-bottom: 1px solid ${theme.colors.gray};
  `}
`;
export const RepositoryTitle = styled.h2`
  ${({ theme }) => css`
    padding-left: ${theme.spacings.xxsmall};
    border-left: 0.7rem solid ${theme.colors.secondary};
    font-size: ${theme.font.sizes.xlarge};
  `}
`;

export const RepositoryInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RepositoryContent = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.small};
  `}
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const RepositoryDescription = styled.p`
  ${({ theme }) => css`
    max-width: 40rem;
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.normal};
  `}
`;

export const RepositoryTech = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.light};
  `}
`;
export const RepositoryCreatedAt = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.light};
  `}
`;
