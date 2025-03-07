import { SkillsContainer, SkillTextContainer, SkillsImgContainer, GameArea  } from "./styles";
import htmlLogo from './assets/htmlLogo.svg'
import marioJump from './assets/marioJump.svg'
import carrossel from './assets/carrossel.gif'
import cssLogo from './assets/cssLogo.svg'
import jsLogo from './assets/jsLogo.svg'
import tsLogo from './assets/tsLogo.svg'
import nodeLogo from './assets/nodeLogo.svg'
import reactLogo from './assets/reactLogo.svg'
import sqlLogo from './assets/sqlLogo.svg'
import gitLogo from './assets/gitLogo.svg'
import figmaLogo from './assets/figmaLogo.svg'
import moeda from './assets/moeda.svg'

export function Skills(){
    return(
        <SkillsContainer>
            <h1>HABILIDADES</h1>
            <SkillTextContainer>
                <span>Ao longo dos anos eu objtive conhecimento teórico e pratico nas seguintes tecnologias: </span>
            </SkillTextContainer>
            <img src={moeda} className="moeda" />
            <SkillsImgContainer>
                <img src={htmlLogo} alt="" />
                <img src={cssLogo} alt="" />
                <img src={jsLogo} alt="" />
                <img src={tsLogo} alt="" />
                <img src={nodeLogo} alt="" />
                <img src={reactLogo} alt="" />
                <img src={sqlLogo} alt="" />
                <img src={gitLogo} alt="" />
                <img src={figmaLogo} alt="" />
            </SkillsImgContainer>
            <GameArea>
                <img src={carrossel} alt="" />
                <img src={marioJump} alt="" />
            </GameArea>
        </SkillsContainer>
    )
}