import styled from "styled-components"



export const StyledItem = styled.li `
    position: inherit;
    transition: .5s;
    :hover{
        transform: scale(1.05);
        transition: .5s;
    }
`
export const StyledName = styled.h2 `
    position: relative;
    bottom: 93.5%;
    font-size: 15px;
    left: 10%;
    @media(min-width: 1024px){
        bottom: 93.5%;
    }
`
export const StyledProfileImg = styled.img `
    width: 226px;
    height: 168px;
    position: relative;
    bottom: 95.5%;
    left: 8%;
    @media(min-width: 1024px){
        bottom: 95.5%;
    }
`
export const StyledInfos = styled.p `
    position: relative;
    bottom: 93%;
    left: 11%;
    max-width: 200px;
    @media(min-width: 1024px){
        bottom: 93%;
    }
    `
