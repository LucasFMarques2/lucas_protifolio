import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/defaultTheme";
import { ThemeProvider } from "styled-components";
import { Home } from "./Pages/Home";

export function App(){
    return(
        <ThemeProvider theme={defaultTheme}>
            <Home/>
            <GlobalStyle/>
        </ThemeProvider>
    )
}