import styled from "styled-components";

import { ContentBase } from "../../styles";

export const ContentForm = styled(ContentBase)``;

export const FormContainer = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    input {
        flex: 1;
        height: 2.6rem;
        background: ${props => props.theme["gray-200"]};
        border: 1px solid ${props => props.theme["gray-300"]};
        border-radius: 6px;
        padding: 0.7rem;
        outline: 0;

        font-size: 1rem;
        color: ${props => props.theme["brown-300"]};

        &::placeholder {
            color: ${props => props.theme["brown-200"]};
        }
        &:focus {
            border-color: ${props => props.theme["yellow-700"]};
        }   

        &[name="cep"], &[name="number"], &[name="district"] {
            max-width: 12.5rem;
        }
        &[name="uf"] {
            max-width: 3.7rem;
        }
    }
`;

export const InputGroup = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    gap: 0.7rem;
`;
