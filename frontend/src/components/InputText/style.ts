import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`

export const Input = styled.input`
  font-size: 32px;
  width: 500px;
  background: #FFF;
  border: none;

  caret-color: #04D361;

  &:focus {
    outline: none;
  }
`

export const Button = styled.button`
  background: #04D361;
  color: #FFF;
  border: none;
  padding: 24px 64px;

  font-weight: bold;

`