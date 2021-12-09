import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    padding: 0 10vw 0;
    height: 18vh;
    margin-top: 2vh;
    width: 100vw;
    background-color: #010c1d;
    align-self: flex-end;
    color: white;

    p {
      font-size: 10px;
      color: #425366;
    }

    button {
      font-size: 10px;
      color: #425366;
      background-color: transparent;
      border: none;
      text-decoration: underline;
      cursor: pointer;

      :hover {
        color: rgba(0, 255, 255, 0.6);
      }
    }
  `}
`

export const HeaderWrapper = styled.section`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  `}
`

export const HourlyForecastWrapper = styled.section`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    padding-top: 20px;
    overflow-x: scroll;

    img {
      width: 50px;
      padding: 5px 0;
    }
  `}
`

export const DailyForecastWrapper = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 20px;

    img {
      width: 50px;
      padding: 5px 0;
    }
  `}
`