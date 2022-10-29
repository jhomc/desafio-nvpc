import styled, { css } from "styled-components";

export const Wrapper = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: 740px;
    padding: 0 ${theme.spacings.large};
  `}
`;
