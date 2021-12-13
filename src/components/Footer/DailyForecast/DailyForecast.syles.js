import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    li {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      text-align: center;
      list-style: none;
      width: 100%;

      & > p {
        width: 33%;
      }

      & > section {
        width: 33%;
      }

      & > p:first-child {
        text-align: left;
      }

      & > p:last-child {
        text-align: right;
      }

    }

    p {
      font-size: ${theme.font.size.xxsmall};
      color: rgba(255, 255, 255, 0.8);
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
