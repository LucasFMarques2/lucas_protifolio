import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    
    :root{
        font-size: 62.5%;
    }

    ::-webkit-scrollbar {
        width: .6rem;
    } 
    ::-webkit-scrollbar-thumb{
        background: ${({ theme }) => theme.COLORS.BLUE};
        border-radius: 4px;
    }
    ::-webkit-scrollbar-track {
        background: transparent; 
    }
    
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
     }

     body{
        height: 100vh;
        width: 100%;
     }

     body, input, textArea, button{
        font: 400 1.6rem DotGothic16, sans-serif;
     }

     a{
        text-decoration: none;
     }

     input[type="number"]::-webkit-outer-spin-button,
     input[type="number"]::-webkit-inner-spin-button {
     -webkit-appearance: none;
     margin: 0;
     }

` 