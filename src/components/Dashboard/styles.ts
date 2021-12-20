import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
    margin-top: -7em;
    
    div {
        background-color: #fff;
        padding: 1.5rem 2rem;
        border-radius: 0.25rem;
        color: #000;
        margin: 2rem;
    
        header {
            font-family: 'Roboto', sans-serif;
            display: flex;
            align-items: center;
            justify-content: space-evenly;
        }

        strong {
            font-family: 'Roboto', sans-serif;
            display: flex;
            align-items: center;
            justify-content: space-evenly;
            margin-top: 1rem;
            font-size: 2rem;
            font-weight: 500;
            line-height: 3rem;   
        }

        &.highlight-background {
            background: #fff;
            color: #000;
        }
    }
`
