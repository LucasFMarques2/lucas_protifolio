import { AboutContainer, 
         HeaderContainer, 
         ProfileContainer, 
         ProfileImg, 
         ProfileText,
         GamerArea,
         TrofeuContainer
} from "./styles";
import { Header } from "../../../../Components/Header";
import { SpeakerSimpleHigh } from "@phosphor-icons/react";
import character from '../../../../assets/character.gif'
import champeonCup from '../../../../assets/champeonCup.gif'

export function About(){
    return(
        <AboutContainer>
            <HeaderContainer>
              <SpeakerSimpleHigh size={32} />
              <Header/>
            </HeaderContainer>

            <ProfileContainer>
                <ProfileImg />
                <ProfileText>
                <p>
                    Olá, me chamo Lucas Frietas Marques
                    tenho 25 anos e sou recem formado em ADS, tenho cerca de 2 anos de experiências profissionais como desenvolvedor 
                    frontend, nesse preírodo tive o prazer de atuar em diversos projetos, desde sites simples até mesmo aplicativos mais robustos.
                </p>
                </ProfileText>
            </ProfileContainer>

            <GamerArea>
              <img src={character} alt="Boneco ascenando"/>
              <span>CLICK AQUI</span>
              <TrofeuContainer>
                <span>EMPREGO</span>
                <img src={champeonCup}/>
              </TrofeuContainer>
            </GamerArea>
        </AboutContainer>
    )
}