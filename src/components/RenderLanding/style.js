import styled from "styled-components";
import background from "../../img/background.png"
import 'animate.css';

export const StyledMain = styled.main `
width: 100vw;
height: 100vh;
background-image: url(${background});
display: flex;
align-items: center;
justify-content: flex-start;
flex-direction: column;
position: fixed;
background-size: cover;
ul{
    scrollbar-width: auto;
    scrollbar-color: #ffffff #4e872c;
}
ul::-webkit-scrollbar {
    width: 16px;
  }

  ul::-webkit-scrollbar-track {
    background: #4e872c;
  }

  ul::-webkit-scrollbar-thumb {
    background-color: #ffffff;
    border-radius: 10px;
    border: 0px none #ffffff;
  }
  
`
export const StyledLogo = styled.img `
    z-index: -0;
    width: 80%;
    margin-bottom: 1rem;
    animation: headShake; /* referring directly to the animation's @keyframe declaration */
    animation-duration: 2s; /* don't forget to set a duration! */
    animation-iteration-count: infinite;
    @media (min-width: 1024px) {
        width: 30%;
    }
`

export const StyledImg = styled.img `
    z-index: 0;
    position: relative;
    height: 70%;
    animation: bounce; /* referring directly to the animation's @keyframe declaration */
    animation-duration: 2s; /* don't forget to set a duration! */
    animation-iteration-count: infinite;
    @media (min-width: 1024px) {
        left: 31%;
        bottom: 21%;
    }
`
export const StyledButton = styled.button `
    padding: 1rem .5rem;
    width: 120px;
    background-color: #4e872c;
    color: #FFF;
    border-radius: 16px;
    border: none;
    cursor: pointer;
    position: fixed;
    top: 50%;
    :hover{
        background-color: #73b140;
    }
`