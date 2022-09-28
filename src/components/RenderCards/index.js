import styled from "styled-components"



export const StyledItem = styled.li `
    margin-top: .5rem;
    position: inherit;
    transition: .5s;
    animation: fadeInUp;
    animation-duration: 1s;
    :hover{
        transform: scale(1.01);
        transition: .5s;
    }
    
`
export const StyledName = styled.h2 `
    position: relative;
    bottom: 95%;
    font-size: 15px;
    left: 10%;
    @media(min-width: 1024px){
        bottom: 95%;
    }
`
export const StyledProfileImg = styled.img `
    width: 226px;
    height: 168px;
    position: relative;
    bottom: 97%;
    left: 8%;
    @media(min-width: 1024px){
        bottom: 97%;
    }
`
export const StyledInfos = styled.p `
    position: relative;
    bottom: 95%;
    left: 11%;
    max-width: 200px;
    @media(min-width: 1024px){
        bottom: 95%;
    }
    `
