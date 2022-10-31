import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.white};
   
    width: 100%;
    height: 20rem;
    background-image: linear-gradient(180deg, #ff5f5f 0%, #f062c0 50%);
  `}
`;

export const HeaderTitle = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.xxlarge};
    padding: 0 ${theme.spacings.medium};
    a {
      text-decoration: none;
      color: ${theme.colors.mainBg};
      transition: color 0.2s;
      &:hover {
        color: ${theme.colors.secondary}
      }
    }
  `}
`;
