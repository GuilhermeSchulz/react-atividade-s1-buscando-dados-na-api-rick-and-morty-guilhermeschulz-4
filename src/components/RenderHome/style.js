import styled from "styled-components";

export const StyledTitle = styled.h1 `
    color: white;
    font-weight: 700;
    font-size: 32px;
`
export const StyledList = styled.ul `
padding: 0.5rem;
    height: 400px;
    width: 62%;
    display: flex;
    flex-direction: row;
    overflow-x: auto;
    gap: 1rem;
    padding: 0;
    overflow-y: hidden;
    

    @media (min-width: 1024px) {
        width:90%;
        max-height: max-content;

    }
`

