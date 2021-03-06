import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-10px)

  }
  100% {
    opacity: 1;
    transform: translateX(0px)

  }
`

export const Container = styled.div`
  display: flex;
  align-items: center;

  min-width: 440px;
  height: 80px;

  background: #FFF;
  border-radius: 5px;

  padding: 14px 14px;

  cursor: pointer;
  :hover{
    background: #F2F2F2;
    border: solid 1px #333;
  }

  img {
    border-radius: 50%;

    height: 60px;
    margin-right: 24px;
  }

  span {
    color: #A8A8B3;
    font-weight: normal;
  }

  @media (max-width: 1200px) {
    max-width: 600px;
  }

  animation: .5s ${fadeIn} ease-out;
  `

