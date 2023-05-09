import styled from "styled-components";

export const SearchFormContainer = styled.div`
    width: 100%;
    margin-top: 4.5rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.7rem;

    header {
        width: 100%;

        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        strong {
            font-size: 1.1rem;
            color: ${props => props.theme["gray-300"]};
        }

        span {
            font-size: 0.8rem;
            color: ${props => props.theme["dark-blue-100"]};
        }
    }

    form {
        width: 100%;

        input {
            width: 100%;
            height: 3.1rem;
            background: ${props => props.theme["dark-blue-900"]};
            border: 1px solid ${props => props.theme["dark-blue-300"]};
            border-radius: 6px;
            padding: 1rem;

            font-size: 1rem;
            color: ${props => props.theme["gray-200"]};

            &::placeholder {
                color: ${props => props.theme["dark-blue-200"]};
            }

            &:focus {
                border-color: ${props => props.theme["blue-500"]};
            }
        }
    }
`;