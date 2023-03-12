import styled from 'styled-components';

import { ContentBase } from "../../styles";

export const ContentPaymentType = styled(ContentBase)`
    header {
        svg {
            color: ${props => props.theme["purple-500"]};
        }
    }

    div {
        width: 100%;

        display: flex;
        align-items: center;
        gap: 0.7rem;

        button {
            flex: 1;
            height: 3.1rem;
            background: ${props => props.theme["gray-300"]};
            border: 1px solid ${props => props.theme["gray-300"]};
            border-radius: 6px;
            padding: 1rem;
            outline: none;

            font-size: 0.8rem;
            text-transform: uppercase;
            color: ${props => props.theme["brown-300"]};

            display: flex;
            align-items: center;
            gap: 0.7rem;

            svg {
                color: ${props => props.theme["purple-500"]};
            }

            &:hover {
                background: ${props => props.theme["gray-400"]};
                border-color: ${props => props.theme["gray-400"]};
            }
        }
        button.active {
            background: ${props => props.theme["purple-100"]};
            border-color: ${props => props.theme["purple-500"]};
        }
    }
`;