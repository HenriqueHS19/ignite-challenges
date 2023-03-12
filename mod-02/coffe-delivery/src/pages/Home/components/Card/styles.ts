import styled from "styled-components";

export const CardContainer = styled.div`
    
    background: ${props => props.theme["gray-100"]};
    border-radius: 6px 36px;
    padding: 1.2rem;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

export const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    & > img {
        width: 7.2rem;
        height: 7.2rem;
        margin-top: -3rem;
    }

    & > div {
        max-width: 100%;

        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap: 0.2rem;

        span {
            background: ${props => props.theme["yellow-100"]};
            padding: 0.2rem 0.5rem;   
            margin-top: 0.7rem;
            border-radius: 100px;

            font-size: 0.6rem;
            font-weight: 700;
            color: ${props => props.theme["yellow-700"]};
            text-transform: uppercase;
        }
    }

    & > h2 {
        margin-top: 1rem;

        font-family: 'Baloo 2';
        font-size: 1.2rem;
        font-weight: 700;
        color: ${props => props.theme["brown-500"]};
    }

    & > p {
        width: 100%;
        margin-top: 0.5rem;

        color: ${props => props.theme["brown-200"]};
        line-height: 1.1rem;
        text-align: center;
    }
`;

export const Footer = styled.footer`
    width: 100%;
    margin-top: 2.2rem;

    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    & > span {
        display: flex;
        align-items: center;

        color: ${props => props.theme["brown-300"]};

        p {
            font-size: 0.8rem;
        }

        strong {
            font-family: 'Baloo 2';
            font-size: 1.4rem;
            font-weight: 800;
        }
    }

    & > div {
        display: flex;
        align-items: center;
        gap: 0.5rem;

        & > button {
            background: ${props => props.theme["purple-700"]};
            border: none;
            border-radius: 6px;
            padding: 0.5rem;

            display: flex;
            align-content: center;

            svg {
                color: ${props => props.theme["white-100"]};
            }

            &:hover {
                background: ${props => props.theme["purple-500"]};
            }
        }
    }
`;


export const AmountCoffe = styled.div`
    height: 2.5rem;
    background: ${props => props.theme["gray-300"]};
    border-radius: 6px;
    padding: 0.5rem;

    display: flex;
    align-items: center;
    gap: 1rem;

    & > p {
        font-size: 1rem;
        color: ${props => props.theme["brown-700"]};
        text-align: center;
    }

    & > button {
        background: transparent;
        border: none;
        outline: none;

        svg {
            color: ${props => props.theme["purple-500"]};
        }

        &:hover {
            svg {
                color: ${props => props.theme["purple-700"]};
            }
        }
    }
`;