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
    

        header {
            font-family: 'Roboto', sans-serif;
            display: flex;
            align-items: center;
            justify-content: space-evenly;
        }

        strong {
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

    .bt1 {
        max-width: 1120px;
        
        
        font-size: 1rem;
        color: #ffffffff;
        background-color: #ff0020;
        border: 0;
        padding: 0 2rem;
        border-radius: 0.25rem;
        height: 2.5rem;

        transition: filter 0.3s;

        &:hover {
            filter: brightness(0.7);
        }
    }
    .bt2 {
        max-width: 1120px;
        
        
        font-size: 1rem;
        color: #ffffffff;
        background-color: #0012ff;
        border: 0;
        padding: 0 2rem;
        border-radius: 0.25rem;
        height: 2.5rem;

        transition: filter 0.3s;

        &:hover {
            filter: brightness(0.7);
        }
    }

    .bt3 {
        font-size: 1rem;
        color: #ffffffff;
        background-color: #ff0020;

        transition: filter 0.3s;

        &:hover {
            filter: brightness(0.7);
        }
    }

    button {
        max-width: 1120px;
        
        font-size: 1rem;
        border: 0;
        padding: 0 2rem;
        border-radius: 0.25rem;
        height: 2.5rem;

        transition: filter 0.3s;

        &:hover {
            filter: brightness(0.7);
        }
    }

`
