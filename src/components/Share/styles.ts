import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    gap: 2rem;

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
        background-color: #ff9200;
    }

    button {
        max-width: 1120px;
        
        font-size: 1rem;
        border: 0;
        padding: 0 2rem;
        border-radius: 0.25rem;
        height: 2.5rem;
        margin: 2rem;

        transition: filter 0.3s;

        &:hover {
            filter: brightness(0.7);
        }
    }

`