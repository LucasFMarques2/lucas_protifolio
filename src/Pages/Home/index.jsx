import { HomeContainer } from "./styles";
import { About } from "./Components/About";
import { Skills } from "./Components/Skills";

export function Home(){
    return(
        <HomeContainer>
            <About/>
            <Skills/>
            <h1>Projetos</h1>
            <h1>Contatos</h1>
        </HomeContainer>
    )
}