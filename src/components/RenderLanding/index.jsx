import logo from "../../img/Rick-And-Morty-Logo.png";
import placeholder from "../../img/image.png";
import { StyledButton, StyledImg, StyledLogo, StyledMain } from "./style";


export const MainLanding = ({changePage}) => {
  return (
    <StyledMain>
      <StyledLogo className="animate__animated animate__headShake" src={logo} alt="Logo Rick and Morty" />
      <StyledImg className="animate__animated animate__bounce" src={placeholder} alt="Imagem Rick and morty head" />
      <StyledButton onClick={changePage}>Entrar</StyledButton>
    </StyledMain>
  );
};
