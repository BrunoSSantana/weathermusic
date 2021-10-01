import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;

  min-width: 440px;
  height: 80px;

  background: #FFF;
  border-radius: 5px;

  padding: 14px 14px;

  cursor: pointer;

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

`