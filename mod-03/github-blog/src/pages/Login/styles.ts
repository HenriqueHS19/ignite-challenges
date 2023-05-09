import styled from "styled-components";

export const LoginContainer = styled.div`
    width: 26.2rem;
    margin: 0 auto;
    margin-top: calc((100vh / 2) - (20rem / 2));
    border-radius: 10px;
    padding: 2.5rem;
    background: ${props => props.theme["dark-blue-700"]};

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;

    img {
        width: 7.5rem;
    }

    form {
        width: 100%;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem;

        input {
            width: 100%;
            height: 3.5rem;
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

        button {
            width: 100%;
            height: 3.5rem;
            background: ${props => props.theme["blue-500"]};
            border: none;
            border-radius: 10px;

            color: ${props => props.theme["gray-100"]};
            font-size: 1.2rem;
            font-weight: 700;
        }
    }  
`;