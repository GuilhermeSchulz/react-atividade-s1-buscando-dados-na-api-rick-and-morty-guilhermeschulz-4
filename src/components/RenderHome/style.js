import styled from "styled-components";
import ScrollContainer from 'react-indiana-drag-scroll'

export const StyledTitle = styled.h1 `
    color: white;
    font-weight: 700;
    font-size: 32px;
    text-align: center;
`
// export const StyledList = styled.ul `
//     padding: 0.5rem;
//     height: 400px;
//     width: 80%;
//     display: flex;
//     flex-direction: row;
//     overflow-x: auto;
//     gap: 1rem;
//     padding: 0;
//     overflow-y: hidden;
//     list-style: none;
//     min-height: 400px;

//     @media (min-width: 1024px) {
//         width:90%;
//         max-height: max-content;

//     }
// `
export const StyledList = styled(ScrollContainer) `

    height: 400px;
    width: 85%;
    display: flex;
    flex-direction: row;
    overflow-x: auto;
    gap: 1rem;
    padding: 0;
    list-style: none;
    min-height: 400px;
    overflow-y: unset;

    @media (min-width: 1024px) {
        width:90%;
        max-height: max-content;

    }
`
export const StyledSubtitle = styled.div`
    display: flex;
    width: 120px;
    gap:1rem;
    align-items: center;
    margin-bottom: 0.5rem;
`
export const StyledColor = styled.div`
    width: 25px;
    height: 25px;
    background-color: green;
`
export const StyledText = styled.span`
    color: white;
    text-align: left;
`
export const StyledColorDead = styled(StyledColor)`
    background-color: red;
`
export const StyledColorUnknown = styled(StyledColor)`
    background-color:grey;  
`
export const StyledContainer = styled.div`
    position: fixed;
    top: 88%;
    left: 13%;
    @media(min-width: 1024px){
        top: 14%;
        left: 6%;
    }
`
export const StyledInnerButton = styled.button`
    padding: 1rem .5rem;
    margin: 0 1rem;
    width: 120px;
    background-color: #4e872c;
    color: #FFF;
    border-radius: 16px;
    border: none;
    cursor: pointer;
    transition: .5s;
    :hover{
        background-color: #73b140;
    }
`








//Oi, meu nome é Guilherme Schulz, tenho 29 anos, moro em canoas no rio grande do sul
//Fui designer gráfico por cerca de 3 anos, hoje estou migrando pra area de tecnologia,
//após encontrar curso da Kenzie Academy, que é uma instituiçao que prepara o aluno por 1 ano para o mercado de trabalho
//A Kenzie oferece a formação como full stack e estou estou atualmente finalizando a primeira parte da formaçao que seria de Front End,
//Tenho experiencia atuando como monitor pela kenzie, ajudando e tirando dúvidas de outros alunos,
//tenho um certo dominio de React, Javascript, CSS, HTML, e também algumas bibliotecas, como MUI e Axios
//Atualmente sinto que estou preparado para poder pegar um desafio maior na minha carreira
//e acredito que a esta empresa é a correta para me proporcionar este desafio