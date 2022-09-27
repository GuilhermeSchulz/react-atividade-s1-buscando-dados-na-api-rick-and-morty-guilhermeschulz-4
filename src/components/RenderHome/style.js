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