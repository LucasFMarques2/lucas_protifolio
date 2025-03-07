import { HomeContainer } from "./styles";
import { About } from "./Components/About";
import { Skills } from "./Components/Skills";
import { Projects } from "./Components/Projects";

export function Home(){
    return(
        <HomeContainer>
            <About/>
            <Skills/>
            <Projects/>
            <h1>Contatos</h1>
        </HomeContainer>
    )
}