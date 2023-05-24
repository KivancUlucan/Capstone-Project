import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    
  }

  body {
    display: flex;
    margin: 0;
    font-family: system-ui;
    background-color: #F5F5F5;
    
    
  }
`;
