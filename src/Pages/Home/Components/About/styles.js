import styled from "styled-components";
import aboutBackground from '../../../../assets/aboutBackground.svg'
import profile from '../../../../assets/profileImg.svg'

export const AboutContainer = styled.section`
  height: 100vh;
  background-image: url(${aboutBackground});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  display: flex;
  flex-direction: column;
  align-items: center;
`

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-top: 2rem;
`

export const ProfileContainer = styled.div`
  width: 50%;
  display: flex;
  margin-top: 3rem;
  justify-content: space-between;
`

export const ProfileImg = styled.img`
  width: 20rem;
  height: 20rem;

  border: 2px solid black;
  border-radius: 50%;

  background-image: url(${profile});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`

export const ProfileText = styled.div`
  width: 40rem;
  padding: 2rem;
  background-color: ${({ theme }) => theme.COLORS.BLACK};
  text-align: center;
  color: ${({ theme }) => theme.COLORS.WHITE};
`

export const GamerArea = styled.div`
  display: flex;
  width: 100%;
  
  justify-content: space-between;
  margin-top: 25rem;

  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: 3rem;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7); 

  img{
    height: 20rem;
  }
`

export const TrofeuContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  color:  ${({ theme }) => theme.COLORS.BLACK};;
`