import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
   body {
     font-family: Roboto, sans-serif;
     font-weight: bold;
     font-size: 16px;

     background: #F2F2FA;
     color: #3A3A3A;

     display: flex;
     flex-direction: column;
     padding: 40px 140px;
   }
`