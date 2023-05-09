import styled from "styled-components";

export const CardPublicationContainer = styled.div`
    width: 100%;
    background: ${props => props.theme["dark-blue-400"]};
    border: 2px solid ${props => props.theme["dark-blue-400"]};
    border-radius: 10px;
    padding: 2rem;
    cursor: pointer;

    &:hover {
        border-color: ${props => props.theme["dark-blue-200"]};
    }

    a {
        width: 100%;
        text-decoration: none;

        display: flex;
        flex-direction: column;
        gap: 1.2rem;
    }

    header {
        width: 100%;

        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        h1 {
            max-width: 80%;
            font-size: 1.2rem;
            color: ${props => props.theme['gray-200']};
        }

        span {
            font-size: 0.8rem;
            text-align: center;
            color: ${props => props.theme["dark-blue-100"]};
        }
    }

    p {
        width: 100%;
        max-height: 70rem;
        color: ${props => props.theme["gray-200"]};

        /* Add ... */
        display: -webkit-box;
        -webkit-line-clamp: 4;
        overflow: hidden;
        -webkit-box-orient: vertical;
    }

    
`;