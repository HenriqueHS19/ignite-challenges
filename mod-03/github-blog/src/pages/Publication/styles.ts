import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import styled from "styled-components";

export const PublicationContainer = styled.div`    
    width: 100%;

    main {
        width: 100%;
        max-width: 52.6rem;
        padding: 1rem;
        padding-bottom: 14.6rem;
        margin: 0 auto;

        header {
            width: 100%;
            padding: 2rem;
            background: ${props => props.theme["dark-blue-700"]};
            border-radius: 10px;

            h2 {
                font-size: 1.5rem;
                color: ${props => props.theme["gray-100"]};
                margin-top: 1.2rem;
            }

            div {
                width: 100%;
                margin-top: 0.5rem;

                display: flex;
                align-items: center;
                gap: 2rem;

                span {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;

                    color: ${props => props.theme["dark-blue-100"]};
                }
            }
        }
    }
`;

export const SubHeader = styled.div`
    width: 100%;
    margin-top: 0.5rem;
    
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
        font-size: 0.7rem;
        font-weight: 700;
        text-transform: uppercase;
        text-decoration: none;
        color: ${props => props.theme["blue-500"]};

        padding-bottom: 0.3rem;
        border-bottom: 1px solid transparent;

        display: flex;
        align-items: center;
        gap: 0.5rem;

        cursor: pointer;

        &:hover {
            border-color: ${props => props.theme["blue-500"]};
        }
    }
`;

export const ReactMarkdownContent = styled(ReactMarkdown)`
    width: 100%;
    padding: 2.5rem 2rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const Content = styled.div`
    width: 100%;
    padding: 2.5rem 2rem;

    p {
        color: ${props => props.theme["gray-200"]};
        line-height: 1.5rem;
    }
`;

export const CodeBlock = styled.div`
    width: calc(100% - 4rem);
    background: ${props => props.theme["dark-blue-400"]};
    border-radius: 2px;
    padding: 1rem;
    margin: 0 auto;
    margin-top: 2.5rem;

    color: ${props => props.theme["gray-200"]};
`;
