import styled from "styled-components";
import skillsBackground from '../../../../assets/skillsBackground.svg'

export const SkillsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;

    color: ${({ theme }) => theme.COLORS.WHITE};
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7); 

    background-image: url(${skillsBackground });
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    
    h1{
        font-size: 8.2rem;
        margin-top: 3rem;
        margin-bottom: 5rem;
    }
`

export const SkillTextContainer = styled.div`
  padding: 2rem;
  width: 80rem;
  background-color: ${({ theme }) => theme.COLORS.BLACK};
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: 3rem;
`

export const SkillsImgContainer = styled.div`
    display: flex;
    margin-top: 4rem;
    background-color:rgba(13, 13, 13, 0.36);
    padding: 1rem 2rem;
    border-radius: 8px;
    gap: 3rem;
    
    img{
        width: 8rem;
    }

    img:nth-child(5){
        margin-top: -5rem;
    }

    margin-top: 10rem;
`

export const GameArea = styled.div`
    display: flex;
    width: 100%;
    img:nth-child(1){
        width: 30rem;
    }

    img:nth-child(2){
        width: 12rem;
        margin-top: -28rem;
        margin-left: 55rem;
    }
    margin-bottom: 4rem;
`