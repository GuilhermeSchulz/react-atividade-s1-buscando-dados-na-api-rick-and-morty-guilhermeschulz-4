import { StyledLogo, StyledMain } from "../RenderLanding/style";
import logo from "../../img/Rick-And-Morty-Logo.png";
import {StyledColor, StyledColorDead, StyledColorUnknown, StyledContainer, StyledInnerButton, StyledList, StyledSubtitle, StyledText, StyledTitle } from "./style";
import { useEffect, useState } from "react";
import { RenderCard } from "../RenderCards/index.jsx";
import { instance } from "../Axios";


export const RenderHome = () => {
    const[results, setResults] = useState([])
    const[page, setPage] = useState(1)


    useEffect(()=>{
      instance.get(`/character/?page=${page}`)
      .then(response => setResults(response.data.results))
      .catch(err => console.log(err))
    }, [page])

    const previousPage = () => {
      if (page > 1) {
        setPage(page - 1)
      }
    };

    const nextPage = () => {
        setPage(page + 1)
    };


  return (
    <>
      <StyledMain>
        <StyledLogo src={logo} alt="Logo Rick and Morty" />
        <div>
          <StyledInnerButton onClick={previousPage}>previous</StyledInnerButton>
          <StyledInnerButton onClick={nextPage}>next</StyledInnerButton>
        </div>
        <StyledContainer>
          <StyledSubtitle>
            <StyledColor></StyledColor>
            <StyledText>Vivo</StyledText>
          </StyledSubtitle>
          <StyledSubtitle>
            <StyledColorDead></StyledColorDead>
            <StyledText>Morto</StyledText>
          </StyledSubtitle>
          <StyledSubtitle>
            <StyledColorUnknown></StyledColorUnknown>
            <StyledText>Indefinido</StyledText>
          </StyledSubtitle>
        </StyledContainer>
        <StyledTitle>Lista de Personagens:</StyledTitle>
        <StyledList vertical={false}>
           {results.map((element) => (<RenderCard className="animate__animated animate__fadeInUp" element={element}/>))}
        </StyledList>
      </StyledMain>
    </>
  );
};
