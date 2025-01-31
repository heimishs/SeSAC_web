import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'NoonnuBasicGothicRegular';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noon-2410@1.0/NoonnuBasicGothicRegular.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'NoonnuBasicGothicRegular';

    
}

a{
    text-decoration: none;
}

ul, il{
    list-style: none;
}

`;
