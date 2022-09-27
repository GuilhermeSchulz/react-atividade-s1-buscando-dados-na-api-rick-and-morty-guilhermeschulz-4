import { StyledLogo, StyledMain } from "../RenderLanding/style";
import logo from "../../img/Rick-And-Morty-Logo.png";
import {StyledList, StyledTitle } from "./style";
import { useEffect, useState } from "react";
import { RenderCard } from "../RenderCards/index.jsx";

export const RenderHome = () => {
    const[results, setResults] = useState([])

    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/character/")
        .then((response) => response.json())
        .then((response) => setResults(response.results))
        .catch((err) => console.log(err))
    }, [])

console.log(results)
  return (
    <>
      <StyledMain>
        <StyledLogo src={logo} alt="Logo Rick and Morty" />
        <StyledTitle>Lista de Personagens:</StyledTitle>
        <StyledList vertical={false}>
           {results.map((element) => (<RenderCard element={element}/>))}
        </StyledList>
      </StyledMain>
    </>
  );
};
