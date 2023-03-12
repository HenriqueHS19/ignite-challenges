import styled from "styled-components";

import { ContentBase } from "../../styles";

export const FinishedPurchaseContainer = styled.div`
    width: 28.1rem;

    display: flex;
    flex-direction: column;
    gap: 2rem;

    h2 {
        font-family: 'Baloo 2';
        font-size: 1.1rem;
        font-weight: 700;
        color: ${props => props.theme["brown-500"]};
    }
`;

export const ContentPurchase = styled(ContentBase)`
    width: 100%;
    border-radius: 6px 36px;

    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    & > div {
        width: 100%;
        
        display: flex;
        flex-direction: column;
    }

    & > footer {
        width: 100%;

        div {
            width: 100%;

            display: flex;
            flex-direction: column;
            gap: 0.7rem;

            span {
                flex: 1;

                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;

                p {
                    font-size: 0.8rem;
                }

                strong {
                    font-size: 1.2rem;
                    font-weight: 700;
                    color: ${props => props.theme["brown-500"]};
                }
            }
        }

        & > button[type="submit"] {
            width: 100%;
            height: 2.8rem;
            background: ${props => props.theme["yellow-500"]};
            border: none;
            border-radius: 6px;
            padding: 0.7rem;
            margin-top: 1.5rem;
        
            font-size: 0.8rem;
            font-weight: 700;
            text-transform: uppercase;
            color: ${props => props.theme["white-100"]};

            &:hover {
                background: ${props => props.theme["yellow-700"]};
            }
        }
    }
`;

export const Item = styled.div`
    width: 100%;
    border-bottom: 1px solid ${props => props.theme["gray-300"]};
    padding-bottom: 1.5rem;
    
    display: flex;
    align-items: center;
    gap: 1.2rem;

    & > img {
        width: 4rem;
    }

    & > div {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 0.8rem;

        header {
            width: 100%;

            display: flex;
            justify-content: space-between;
            align-items: center;
            
            p    {
                font-weight: 400;
                color: ${props => props.theme["brown-500"]};
            }

            strong {
                font-weight: 700;
                text-align: right;
                color: ${props => props.theme["brown-500"]};
            }
        }
    }
`;

export const ButtonGroup = styled.div`
    width: 100%;

    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;

    span {
        height: 2rem;
        background: ${props => props.theme["gray-300"]};
        border-radius: 6px;
        padding: 0.8rem;
        
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 0.5rem;

        & > p {
            font-size: 0.9rem;
            text-align: center;
        }

        & > button {
            background: transparent;
            border: none;
            outline: none;

            color: ${props => props.theme["brown-700"]};

            svg {
                color: ${props => props.theme["purple-500"]};
            }
        }
    }

    & > button {
        height: 2rem;
        background: ${props => props.theme["gray-300"]};
        border: none;
        border-radius: 6px;
        padding: 0.8rem;

        font-size: 0.7rem;
        color: ${props => props.theme["brown-300"]};
        text-transform: uppercase;

        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 0.2rem;

        svg {
            color: ${props => props.theme["purple-500"]};
        }

        &:hover {
            background: ${props => props.theme["gray-400"]};
        }
    }
`;