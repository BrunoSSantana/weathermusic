import styled from "styled-components";

export const Text = styled.h3`
  font-size: 18px;
  font-weight: normal;
  margin: 30px 0;
`

export const Button = styled.button`
  border: none;
  background: #04D361;

  margin: 18px;
  padding: 4px 14px;

  display: flex;
  align-items: center;

  font-family: Roboto, sans-serif;
  font-weight: bold;
  color: #FFF;

  border-radius: 5px;

  &:hover {
    cursor: pointer;
  }

  #favorite {
    fill: #FFF;
    margin-right: 7px;

  }


`
export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`