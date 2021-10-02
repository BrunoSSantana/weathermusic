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
     /* padding: 40px 100px; */

     
   }

   button{
     cursor: pointer;
   }

   a{
     text-decoration: none;
     color: #333;
   }

   :root {

    --button-login-Register: #30B535;
    --button-login-Register-hover: #26AA2B;
    --login-Register-shadow: #004407; 
    --border-bottom-login: #9e9e9e;
    --login-text-info: #E1E1E1;
    --button-text-login: #E1E1E1;
    --login-focus-shadow: #35EA47;

    }
`