import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: center;
    
    width: 100%;
    gap: 15rem;

    background: ${({ theme }) => theme.COLORS.BLUE};
    border: 2px solid ${({ theme }) => theme.COLORS.BLACK};
    border-radius: 8px;
    
    padding: 0.5rem 5rem;

    a{
      color: ${({ theme }) => theme.COLORS.WHITE};
      font-size: 2.2rem;
      text-decoration: underline;
      transition: transform .2s;
    }

    a:hover{
        transform: scale(0.9);
    }
`