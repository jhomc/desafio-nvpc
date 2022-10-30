import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: 0 ${theme.spacings.large};
  `}
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 74rem;
  margin: 0 auto;
`;

export const SearchByTextInput = styled.input`
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.mainBg};
    border-radius: ${theme.border.radius};
    background-color: ${theme.colors.lightGray};
    padding: ${theme.spacings.xxsmall};
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.mainBg};
    font-family: ${theme.font.family};
  `}
  width: 100%;
  height: 5.4rem;
  margin-top: -2.7rem;
`;

export const SearchByDate = styled.button``;

export const SearchByTechnology = styled.select`
  ${({ theme }) => css`
    height: 2.8rem;
    background: transparent;
    border: none;
    color: ${theme.colors.white};
    font-family: ${theme.font.family};
    font-weight: ${theme.font.bold};
  `}
`;
export const TechOption = styled.option`
  ${({ theme }) => css`
    font-family: ${theme.font.family};
    color: ${theme.colors.black};
  `}
`;
