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
        margin-bottom: 200px;
    

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

    .bt1 {
        color: #ffffffff;
        background-color: #ff0020;
    }
    .bt2 {
        color: #ffffffff;
        background-color: #0012ff;
    }

    .bt3 {
        color: #ffffffff;
        background-color: #ff0020;
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
