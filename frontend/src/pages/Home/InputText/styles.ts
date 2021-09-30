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
  border-radius: 8px 0 0 8px;

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
  border-radius: 0 8px 8px 0;

  font-weight: bold;

`