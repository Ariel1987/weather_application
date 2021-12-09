import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: center;

    p {
      font-size: ${theme.font.size.xxsmall};
      color: rgba(255, 255 , 255, .8);
    }
  `}
`

export const WeatherWrapper = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: center;
  `}
`
