import styled, { css } from "styled-components"
import cardGrey from "../../img/cardGrey.png"
import cardRed from "../../img/cardRed.png"
import cardGreen from "../../img/cardGreen.png"

export const StyledItem = styled.li `

   ${({status}) => {
        if(status === "Alive"){
            return css`
            background-image: url(${cardGreen});
            ` 
        }else if(status === "Dead"){
            return css`
            background-image: url(${cardRed});
            `
        }else{
            return css`
            background-image: url(${cardGrey});
            `
        }
   }}
    background-position: center;
    background-repeat: no-repeat;
    min-width: 266px;
    min-height: 375px;
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
    font-size: 15px;
    margin: 0;
    margin-top: 1.6rem;
    margin-left: 1.6rem;
`
export const StyledProfileImg = styled.img `
    width: 226px;
    height: 168px;
    margin-top: 0.3rem;
    margin-left: 1.25rem;
`
export const StyledInfos = styled.p `
    max-width: 200px;
    margin-top: 1.6rem;
    margin-left: 1.6rem;
`
