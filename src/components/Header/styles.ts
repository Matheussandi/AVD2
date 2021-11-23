import styled from "styled-components";

export const Container = styled.header`
    background: var(--blue);
`

export const Content = styled.div`
    
    padding: 2rem 1rem 10rem;
    display: flex;
    align-items: center;
    justify-content: space-around;

    button {
        max-width: 1120px;
        
        
        font-size: 1rem;
        color: #ffffffff;
        background-color: #000000;
        border: 0;
        padding: 0 2rem;
        border-radius: 0.25rem;
        height: 2.5rem;

        transition: filter 0.3s;

        &:hover {
            filter: brightness(0.7);
        }
    }

    img {
        border-radius: 1rem;
    }
`
