import styled from "styled-components";

export const Cards = styled.div`
  color: #3A3A3A;
  
  display: flex;
  flex-direction: column;
  
  gap: 10px;

  padding: 40px 0;
`

export const Title = styled.h1`
  font-size: 32px;
  width: 500px;

  margin-bottom: 20px;

`

export const Header = styled.div`
  color: #3A3A3A;
  
  display: flex;
  flex-direction: column;

  padding: 40px 80px;

`

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  & > div:first-child {
    padding-top: 20vh;
  }
`