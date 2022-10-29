import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.white};
    width: 100%;
    height: 20rem;
  `}
`;

export const HeaderTitle = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-size: ${theme.font.sizes.xxlarge};
    span {
      background-image: linear-gradient(90deg, #ff5f5f 0%, #f062c0 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  `}
`;
