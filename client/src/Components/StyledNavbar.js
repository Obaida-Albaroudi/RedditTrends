import styled from 'styled-components'

export const StyledNavBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${white};
    width: 100%;

    @media ${device.tablet} {   
        flex-direction: column;
        padding-bottom: 5px;
    }
`

export const StyledLogo = styled.img`
    margin: 5px 0 5px 10px;
    height: 75%;
    width: 75%;

    @media ${device.tablet} {
        margin: 5px auto 0;
        transform: translateX(-50%);
        position: relative;
        left: 50%;
    }
`