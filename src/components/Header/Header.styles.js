import styled from 'styled-components'

export const SearchLocationWrapper = styled.section`
  display: flex;
  position: relative;
`

export const Button = styled.button`
  border: none;
  position: absolute;
  right: -32px;
  top: 4px;
  background: none;

  & > img {
    height: 18px;
    margin-left: 16px;
  }
`

export const BackButton = styled.button`
  position: absolute;
  bottom: 96%;
  right: 92%;
  background: none;
  border: none;

  img {
    width: 20px;
  }
`
