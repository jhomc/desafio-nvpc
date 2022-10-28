import styled, { css } from 'styled-components'

export const Wrapper = styled.h1`
  ${({theme}) => css`
    color: ${theme.colors.secondary}
  `}
`