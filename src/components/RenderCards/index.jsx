import { StyledInfos, StyledItem, StyledName, StyledProfileImg } from "."
import cardGrey from "../../img/cardGrey.png"
import cardRed from "../../img/cardRed.png"
import cardGreen from "../../img/cardGreen.png"

export const RenderCard = ({element}) => {

// const renderBg = () => {
//     if(element.status === "Alive"){
//         return cardGreen
//     }else if(element.status === "Dead"){
//         return cardRed
//     }else{
//         return cardGrey
//}} 


    return(
        <StyledItem key={element.id} status = {element.status}>
            {/* <img src={element.status === "Alive"? cardGreen : element.status === "Dead"? cardRed : cardGrey}
                alt={element.name}/> */}
            <StyledName>{element.name}</StyledName>
            <StyledProfileImg src={element.image} alt={element.name}></StyledProfileImg>
            <StyledInfos>{element.species} - {element.origin.name}</StyledInfos>
        </StyledItem>
    )
}

