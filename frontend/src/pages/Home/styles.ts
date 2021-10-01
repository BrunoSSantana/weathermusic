import styled from "styled-components";

export const Cards = styled.div`
  color: #3A3A3A;
  
  display: flex;
  flex-direction: column;
  
  gap: 10px;

  padding: 40px 0;
  @media (max-width: 1200px) {
    padding-left: 80px;
  }
`

export const Title = styled.h1`
  font-size: 32px;
  width: 500px;
  word-break: break-word;


  margin-bottom: 20px;
  @media (max-width: 560px) {
    width: 70vw;
    font-size: 24px;
  }

`

export const Header = styled.div`
  color: #3A3A3A;
  
  display: flex;
  flex-direction: column;

  padding: 40px 80px;

  p {
    margin: 20px 0 0;
    font-weight: normal;
  }

`

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  & > div:first-child {
    padding-top: 20vh;
  }

  @media (max-width: 1200px) {
    flex-direction: column;
  }
`

export const InputText = styled.div`
  display: flex;
  flex-direction: row;

`

export const Input = styled.input`
  font-size: 32px;
  width: 35vw;
  background: #FFF;
  border: none;
  border-radius: 8px 0 0 8px;

  caret-color: #04D361;

  padding: 0 20px;

  color: #444;

  @media (max-width: 560px) {
    font-size: 18px;
    height: 50px;
  }

  &:focus {
    outline: none;
  }



`

export const Button = styled.button`
  background: #04D361;
  color: #FFF;
  border: none;
  padding: 24px 64px;
  border-radius: 0 8px 8px 0;

  font-weight: bold;

  @media (max-width: 560px) {
    font-size: 14px;
    height: 50px;
    padding: 0 20px;
  }

`
export const Text = styled.h3`
  font-size: 18px;
  font-weight: normal;
  margin: 30px 0;
`

export const ButtonSVG = styled.button`
  border: none;
  background: #04D361;

  margin: 18px;
  padding: 4px 14px;

  display: flex;
  align-items: center;

  font-family: Roboto, sans-serif;
  font-weight: bold;
  color: #FFF;

  border-radius: 6px;

  &:hover {
    cursor: pointer;
  }

  #favorite {
    fill: #FFF;
    margin-right: 7px;

  }


`
export const Question = styled.div`
  padding: 20px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
`